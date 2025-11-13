import App from "./routes/App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PostList, { postLoader } from "./components/PostList.tsx";
import CreatePost, { createPostAction } from "./components/CreatePost.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
