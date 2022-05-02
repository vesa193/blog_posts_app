// Posts - interface
export interface AppProps {
    log: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export interface PostsList {
    posts: Post[];
}

export interface CustomizedState {
    userId: number;
}

export interface User {
    id: number;
    name: string;
}
export interface UsersList {
    users: User[];
}

// PostCard - interface
export interface PostCardProps {
    title: string;
    body: string;
    author: string | undefined;
    hasButton?: boolean;
    handleOnClick?: () => void;
}

// Comment - interface

export interface Comment {
    postId?: number;
    id?: number;
    name: string;
    email: string;
    body: string;
}
export interface CommentsList {
    comments: Comment[];
}

// Header - interface
export interface HeaderProps {
    title: string;
}

export interface Query {
    search: string;
}

export interface SearchBoxProps {
    label: string;
    handleOnChange: () => void;
}
