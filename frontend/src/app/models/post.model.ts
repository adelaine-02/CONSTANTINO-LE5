export type Post = {
  id?: number;
  title?: string;
  body?: string;
  datecreated?: string;
  dateCreated?: string; // Add this to match C# JSON serialization if needed
  userName?: string;
  firstName?: string;
  lastName?: string;
}