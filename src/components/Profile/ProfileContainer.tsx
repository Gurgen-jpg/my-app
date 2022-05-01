import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {Profile} from "./Profile";
import {compose} from "redux";
import React from "react";

export const ProfileContainer = compose<React.ComponentType>(WithAuthRedirect
)(Profile)