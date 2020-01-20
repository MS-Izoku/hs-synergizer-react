import DOMPurify from "dompurify";

export const baseURL = "http://localhost:3000/"  // this is the base URL for the backend server

export const icons = {
  upvotes: {
    liked: "#",
    nonLiked: "#"
  },
  views: "#",
  user: "#"
}

export const createMarkup = text => {
  return { __html: DOMPurify.sanitize(text) };
};