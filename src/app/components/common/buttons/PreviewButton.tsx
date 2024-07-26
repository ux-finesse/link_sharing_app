import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

interface Link {
  id: number;
  url: string;
  platform: {
    id: number;
    name: string;
  };
}

interface PreviewButtonProps {
  formValues: FormValues;
  links: Link[];
  preview: string;
}

const PreviewButton = ({ formValues, links, preview }: PreviewButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handlePreview = async () => {
    setLoading(true);

    const body = {
      links,
      formValues,
      preview,
    };

    try {
      const response = await fetch("/api/saveState", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to save state");
      }

      const data = await response.json();
      console.log("Saved state:", data);
      toast.success("State saved successfully!");
      // handle successful response here, e.g., navigate to preview page with saved state key
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error saving state:", err.message);
        toast.error(`Error: ${err.message}`);
      } else {
        console.error("Unknown error:", err);
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handlePreview} disabled={loading}>
        {loading ? "Saving..." : "Preview"}
      </button>
      <ToastContainer />
    </>
  );
};

export default PreviewButton;
