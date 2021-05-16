import {MAIN_ROUTE, PROGRAMS_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, CREATE_PROGRAM_ROUTE, PROGRAM_ID_ROUTE} from "./routerConsts";
import HomePage from "../components/homePage";
import SignInPage from "../components/signInPage";
import SignUpPage from "../components/signUpPage";
import ProgramsListingPage from "../components/programsListingPage";
import CreateProgramPage from "../components/createProgramPage";
import ProgramDetailPage from "../components/programDetailPage";

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
        path: PROGRAMS_ROUTE,
        Component: ProgramsListingPage
    },
    {
        path: CREATE_PROGRAM_ROUTE,
        Component: CreateProgramPage
    },
    {
        path: PROGRAM_ID_ROUTE + '/:id',
        Component: ProgramDetailPage
    },
]