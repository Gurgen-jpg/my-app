import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {Profile} from "./Profile";

export const ProfileContainer = WithAuthRedirect(Profile)