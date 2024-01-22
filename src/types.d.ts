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

export interface IFundingItem {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    current_amount: number;
    current_percentage: number;
    title: string;
    content: string;
    price: number;
    goal_amount: number;
    end_date: string;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export interface ISaleItem {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    title: string;
    content: string;
    price: number;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export interface INotice {
    id: string;
    title: string;
}

export interface INoticeResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: INotice[];
}