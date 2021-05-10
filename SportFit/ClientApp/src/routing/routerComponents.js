import {MAIN_ROUTE, PROGRAMS_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, CREATE_PROGRAM_ROUTE, PROGRAM_ID_ROUTE} from "./routerConsts";
import HomePage from "../components/homePage";
import SignInPage from "../components/signInPage";
import SignUpPage from "../components/signUpPage";
import ProgramsPage from "../components/programsPage";
import CreateProgramPage from "../components/createProgramPage";
import ProgramIdPage from "../components/programIdPage";

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
        Component: ProgramsPage
    },
    {
        path: CREATE_PROGRAM_ROUTE,
        Component: CreateProgramPage
    },
    {
        path: PROGRAM_ID_ROUTE,
        Component: ProgramIdPage
    },
]