import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession();

  if (!session.session) return null;

  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function signup({ name, email, password, profile_picture }) {
    const fileName = `dp-${name.split(" ").join("-")}-${Date.now()}`;
 
    if (!profile_picture || profile_picture.size === 0) {
      throw new Error("Profile picture is empty or invalid.");
    }
  
    const { error: storageError } = await supabase.storage
      .from("user_profile_pictures")
      .upload(fileName, profile_picture, {
        contentType: profile_picture.type, 
      });
  
    if (storageError) {
      throw new Error(`Storage upload failed: ${storageError.message}`);
    }
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          profile_pic: `${supabaseUrl}/storage/v1/object/public/user_profile_pictures/${fileName}`, 
        },
      },
    });
    console.log(`${supabaseUrl}/storage/v1/object/public/user_profile_pictures/${fileName}`);
  
    if (error) {
      throw new Error(`Signup failed: ${error.message}`);
    }
  
    return data;
  }
  

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
