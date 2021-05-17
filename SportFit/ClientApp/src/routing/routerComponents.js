import {MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, CREATE_PROGRAM_ROUTE, 
        PROGRAM_DETAIL_ROUTE, USER_PROFILE_ROUTE} from "./routerConsts";

import HomePage from "../components/homePage";
import SignInPage from "../components/signInPage";
import SignUpPage from "../components/signUpPage";
import ProgramsListingPage from "../components/programsListingPage";
import CreateProgramPage from "../components/createProgramPage";
import ProgramDetailPage from "../components/programDetailPage";
import UserProfile from "../components/userProfile";

export const routerComponents = [
    {
        path: MAIN_ROUTE,
        Component: HomePage
    },
    {
        path: SIGNIN_ROUTE,
        Component: SignInPage
    },
    {
        path: SIGNUP_ROUTE,
        Component: SignUpPage
    },
    {
        path: PROGRAMS_LISTENING_ROUTE,
        Component: ProgramsListingPage
    },
    {
        path: CREATE_PROGRAM_ROUTE,
        Component: CreateProgramPage
    },
    {
        path: PROGRAM_DETAIL_ROUTE + '/:id',
        Component: ProgramDetailPage
    },
    {
        path: USER_PROFILE_ROUTE + '/:id',
        Component: UserProfile
    },
]