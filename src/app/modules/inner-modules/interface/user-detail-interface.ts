export interface userDetailModal {
    candidateId?: string | null | undefined,
    candidateName?: string | null | undefined,
    candidateSourceId?: number,
    candidateStatus?: number,
    companyId?: string | null | undefined,
    createdDate?: string | null | undefined,
    description?: string | null | undefined,
    emailAddress?: string | null | undefined,
    isEmailSent?: boolean
    isFavorite?: boolean
    jobOpeningId?: string | null | undefined,
    jobTitle?: string | null | undefined,
    labelIds?: jobOpeningAndHiringStageDropDownModel[],
    linkedInProfileLink?: string | null | undefined,
    phoneNumber?: string | null | undefined,
    relevanceRating?: number,
    stageId?: string | null | undefined,
    stageName?: string | null | undefined,
    submittedDate?: string | null | undefined,
    totalRocord?: number,
    uploadResume?: string | null | undefined ,


    isSelectRow?: boolean,
    candidatePageLink?: string | null | undefined,
}
export interface jobOpeningAndHiringStageDropDownModel {
    id?: number,
    name?: string | null | undefined,
}