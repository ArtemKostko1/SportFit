import {
    MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, CREATE_PROGRAM_ROUTE, PROGRAM_DETAIL_ROUTE, 
    USER_ACCOUNT_ROUTE, USER_PROFILE_ROUTE, USER_SELECTED_ROUTE, USER_PROGRAMS_ROUTE, SUPPORT_ROUTE, SETTINGS_ROUTE,
    EDIT_PROGRAM_ROUTE
} from "./routerConsts";

import HomePage from "../_components/homePage";
import SignInPage from "../_components/signInPage";
import SignUpPage from "../_components/signUpPage";
import ProgramsListingPage from "../_components/programsListingPage";
import CreateProgramPage from "../_components/createProgramPage";
import ProgramDetailPage from "../_components/programDetailPage";
import UserProfilePage from "../_components/userProfilePage";
import UserAccountPage from "../_components/userAccountPage";
import UserSelectedPage from "../_components/userSelectedPage";
import UserProgramsListingPage from "../_components/userProgramsListingPage";
import SupportPage from "../_components/supportPage";
import SettingsPage from "../_components/settingsPage";

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
        path: EDIT_PROGRAM_ROUTE + '/:id',
        Component: CreateProgramPage
    },
    {
        path: PROGRAM_DETAIL_ROUTE + '/:id',
        Component: ProgramDetailPage
    },
    {
        path: USER_PROFILE_ROUTE + '/:id',
        Component: UserProfilePage
    },
    {
        path: USER_ACCOUNT_ROUTE + '/:id',
        Component: UserAccountPage
    },
    {
        path: USER_SELECTED_ROUTE/* + '/:id'*/,
        Component: UserSelectedPage
    },
    {
        path: USER_PROGRAMS_ROUTE/* + '/:id'*/,
        Component: UserProgramsListingPage
    },
    {
        path: SUPPORT_ROUTE,
        Component: SupportPage
    },
    {
        path: SETTINGS_ROUTE,
        Component: SettingsPage
    }
]