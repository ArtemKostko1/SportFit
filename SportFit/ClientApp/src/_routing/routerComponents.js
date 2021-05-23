import {MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, CREATE_PROGRAM_ROUTE, 
        PROGRAM_DETAIL_ROUTE, USER_PROFILE_ROUTE} from "./routerConsts";

import HomePage from "../_components/homePage";
import SignInPage from "../_components/signInPage";
import SignUpPage from "../_components/signUpPage";
import ProgramsListingPage from "../_components/programsListingPage";
import CreateProgramPage from "../_components/createProgramPage";
import ProgramDetailPage from "../_components/programDetailPage";
import UserProfile from "../_components/userProfile";

export const routerComponents = [
    {
        path: MAIN_ROUTE,
        Component: HomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: SignInPage
    },
    {
        path: REGISTER_ROUTE,
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