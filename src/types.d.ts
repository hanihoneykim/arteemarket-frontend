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
    category_name:string;
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
    content: string;
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

export interface IEvent {
    id: string;
    title: string;
    image: string;
    content: string;
}

export interface IEventResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IEvent[];
}

export interface IUser {
    nickname: string;
    email: string;
    profile_image: string;
    name: string;
    phone_number: number;
    is_admin: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    date_joined: string;
}