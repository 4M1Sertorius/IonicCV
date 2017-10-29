//LoginResponse for error description Asko Mikkola 1600397
export interface LoginResponse {
    result?: {
        email?: string;
        uid?: string;
    }
    error?: {
        code?: string;
        message?: string;
    }
}