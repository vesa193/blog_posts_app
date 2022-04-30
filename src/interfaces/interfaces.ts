// Posts - interface
export interface AppProps {
    log: string;
}

export interface PostsList {
    posts: Post[];
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface UsersList {
    users: User[];
}

export interface User {
    id: number;
    name: string;
}

// PostCard - interface

export interface PostCardProps {
    title: string;
    body: string;
    author: string | undefined;
    handleOnClick: () => void;
}
