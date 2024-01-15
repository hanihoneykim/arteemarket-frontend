export interface IBanner {
    image: string;
    id: number;
}

export interface IBannerResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IBanner[];
}