export const MAX_BOOK_MEGABYTES = 40;
export const MAX_BOOK_BYTES = MAX_BOOK_MEGABYTES * 1024 * 1024;
// Leave room for multipart headers and the small import settings fields.
export const MAX_BOOK_REQUEST_BYTES = MAX_BOOK_BYTES + 1024 * 1024;
