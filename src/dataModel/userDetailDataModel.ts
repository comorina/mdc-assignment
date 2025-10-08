export interface UserDetail {
    id: number;
    username: string;
    shortInfo: string;
    companyName: string;
    yearsOfExperience: number;
    skills: string[];
    projects: Projects[];
    image: string;
    email: string;
    contactNumber: string;
    summary: string;
}

export interface UserDetailDataModel {
    userData: {
        userDetail: UserDetail[];
    };
}

export interface userList {
    id: number;
    username: string;
}
export interface UserListDataModel {
    userList: userList[];
}

export interface Projects {
    id: number;
    projectName: string;
    whatHaveDone: string;
    roleAndResponsibility: string;
    skills: string[];
}
