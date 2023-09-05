import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
    matcher: [
        /*
         * Match all request paths starting with /dashboard
         */
        "/(dashboard.*)"
    ]
};

export default authMiddleware;