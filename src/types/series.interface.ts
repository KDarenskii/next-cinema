import { MotionBase } from "./motionBase.interface";

export interface ISeries extends MotionBase {
    name: string;
    originCountry: string[];
    originalName: string;
    firstAirDate?: string;
}
