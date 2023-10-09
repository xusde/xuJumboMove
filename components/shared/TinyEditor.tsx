import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = () => {
  const editorRef = useRef<null | Editor>(null);
  return (
    <div>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
        onInit={(evt, editor) =>
          // @ts-ignore
          (editorRef.current = editor)
        }
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",

            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "codesample",
            "wordcount",
          ],
          toolbar:
            "undo redo | " +
            "codesample" +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist | ",
          content_style:
            "body { font-family:Inter ,sans-serif; font-size:16px }",
        }}
        className="background-light900_dark300 text-dark300_light700"
      />
    </div>
  );
};

export default TinyEditor;
