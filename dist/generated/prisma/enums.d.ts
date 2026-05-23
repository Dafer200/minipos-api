export declare const EnrollmentStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DROPPED: "DROPPED";
    readonly COMPLETED: "COMPLETED";
};
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];
