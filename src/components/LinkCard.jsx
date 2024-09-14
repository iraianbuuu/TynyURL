import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Copy, Download, Trash } from "lucide-react";
import useFetch from "@/hooks/UseFetch";
import { deleteUrl } from "@/db/apiUrl";
import { BeatLoader } from "react-spinners";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const LinkCard = ({ url, fetchUrls }) => {
  const downloadImage = () => {
    const imageUrl = url?.qr_code;
    const fileName = url?.title;

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger the download by simulating a click event
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  };

  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url?.id);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    fnDelete()
      .then(() => {
        fetchUrls(); // Fetch updated list of URLs
        setIsDialogOpen(false); // Close the dialog after deletion
      })
      .catch((error) => {
        console.error("Deletion failed: ", error);
      });
  };

  return (
    <div className="mt-5 flex flex-col md:flex-row gap-5 border p-4 rounded-lg">
      <img
        src={url?.qr_code}
        alt="QR Code"
        className="h-32 object-contain ring ring-blue-500 self-start"
      />
      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-2xl font-extrabold hover:underline cursor-pointer">
          {url?.title}
        </span>
        <span className="text-1xl text-blue-400 hover:underline cursor-pointer">
          http://localhost:5173/
          {url?.custom_url ? url?.custom_url : url.short_url}
        </span>
        <span className="flex items-center gap-1 hover:underline cursor-pointer">
          {url?.original_url}
        </span>
        <span className="flex mt-2 font-extralight text-sm flex-1">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>

      <div className="flex flex-col gap-2">
        {/* Tooltip for Copy */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(
                      `http://localhost:5173/${url?.short_url}`
                    );
                  } catch (err) {
                    console.error("Failed to copy: ", err);
                  }
                }}
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Tooltip for Download */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" onClick={downloadImage}>
                <Download />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Tooltip and Delete Button with Confirmation */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" onClick={() => setIsDialogOpen(true)}>
                {loadingDelete ? (
                  <BeatLoader size={5} color="white" />
                ) : (
                  <Trash />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Alert Dialog for Confirmation */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure to delete?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your shortened URL.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default LinkCard;
