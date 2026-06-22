import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePayload>;
export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type ProfileAvgAggregateOutputType = {
    yearOfStudy: number | null;
    goalVector: number | null;
};
export type ProfileSumAggregateOutputType = {
    yearOfStudy: number | null;
    goalVector: number[];
};
export type ProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    yearOfStudy: number | null;
    faculty: string | null;
    department: string | null;
    goalStatement: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    yearOfStudy: number | null;
    faculty: string | null;
    department: string | null;
    goalStatement: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    yearOfStudy: number;
    faculty: number;
    department: number;
    goalStatement: number;
    goalVector: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfileAvgAggregateInputType = {
    yearOfStudy?: true;
    goalVector?: true;
};
export type ProfileSumAggregateInputType = {
    yearOfStudy?: true;
    goalVector?: true;
};
export type ProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    yearOfStudy?: true;
    faculty?: true;
    department?: true;
    goalStatement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    yearOfStudy?: true;
    faculty?: true;
    department?: true;
    goalStatement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    yearOfStudy?: true;
    faculty?: true;
    department?: true;
    goalStatement?: true;
    goalVector?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileCountAggregateInputType;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfile[P]> : Prisma.GetScalarType<T[P], AggregateProfile[P]>;
};
export type ProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithAggregationInput | Prisma.ProfileOrderByWithAggregationInput[];
    by: Prisma.ProfileScalarFieldEnum[] | Prisma.ProfileScalarFieldEnum;
    having?: Prisma.ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type ProfileGroupByOutputType = {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector: number[];
    createdAt: Date;
    updatedAt: Date;
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]>;
}>>;
export type ProfileWhereInput = {
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    id?: Prisma.StringFilter<"Profile"> | string;
    userId?: Prisma.StringFilter<"Profile"> | string;
    firstName?: Prisma.StringFilter<"Profile"> | string;
    lastName?: Prisma.StringFilter<"Profile"> | string;
    yearOfStudy?: Prisma.IntNullableFilter<"Profile"> | number | null;
    faculty?: Prisma.StringFilter<"Profile"> | string;
    department?: Prisma.StringFilter<"Profile"> | string;
    goalStatement?: Prisma.StringFilter<"Profile"> | string;
    goalVector?: Prisma.FloatNullableListFilter<"Profile">;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    skills?: Prisma.ProfileSkillListRelationFilter;
    interests?: Prisma.ProfileInterestListRelationFilter;
    availability?: Prisma.AvailabilityListRelationFilter;
};
export type ProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    yearOfStudy?: Prisma.SortOrderInput | Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    goalStatement?: Prisma.SortOrder;
    goalVector?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    skills?: Prisma.ProfileSkillOrderByRelationAggregateInput;
    interests?: Prisma.ProfileInterestOrderByRelationAggregateInput;
    availability?: Prisma.AvailabilityOrderByRelationAggregateInput;
};
export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    firstName?: Prisma.StringFilter<"Profile"> | string;
    lastName?: Prisma.StringFilter<"Profile"> | string;
    yearOfStudy?: Prisma.IntNullableFilter<"Profile"> | number | null;
    faculty?: Prisma.StringFilter<"Profile"> | string;
    department?: Prisma.StringFilter<"Profile"> | string;
    goalStatement?: Prisma.StringFilter<"Profile"> | string;
    goalVector?: Prisma.FloatNullableListFilter<"Profile">;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    skills?: Prisma.ProfileSkillListRelationFilter;
    interests?: Prisma.ProfileInterestListRelationFilter;
    availability?: Prisma.AvailabilityListRelationFilter;
}, "id" | "userId">;
export type ProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    yearOfStudy?: Prisma.SortOrderInput | Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    goalStatement?: Prisma.SortOrder;
    goalVector?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileCountOrderByAggregateInput;
    _avg?: Prisma.ProfileAvgOrderByAggregateInput;
    _max?: Prisma.ProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMinOrderByAggregateInput;
    _sum?: Prisma.ProfileSumOrderByAggregateInput;
};
export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    yearOfStudy?: Prisma.IntNullableWithAggregatesFilter<"Profile"> | number | null;
    faculty?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    department?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    goalStatement?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    goalVector?: Prisma.FloatNullableListFilter<"Profile">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
};
export type ProfileCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    skills?: Prisma.ProfileSkillCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestUncheckedCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    skills?: Prisma.ProfileSkillUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.ProfileSkillUncheckedUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUncheckedUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateManyInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileNullableScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput | null;
    isNot?: Prisma.ProfileWhereInput | null;
};
export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    yearOfStudy?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    goalStatement?: Prisma.SortOrder;
    goalVector?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileAvgOrderByAggregateInput = {
    yearOfStudy?: Prisma.SortOrder;
    goalVector?: Prisma.SortOrder;
};
export type ProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    yearOfStudy?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    goalStatement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    yearOfStudy?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    goalStatement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileSumOrderByAggregateInput = {
    yearOfStudy?: Prisma.SortOrder;
    goalVector?: Prisma.SortOrder;
};
export type ProfileScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput;
    isNot?: Prisma.ProfileWhereInput;
};
export type ProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProfileUpdateWithoutUserInput>, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProfileUpdateWithoutUserInput>, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileCreategoalVectorInput = {
    set: number[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProfileUpdategoalVectorInput = {
    set?: number[];
    push?: number | number[];
};
export type ProfileCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutSkillsInput, Prisma.ProfileUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutSkillsInput, Prisma.ProfileUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.ProfileUpsertWithoutSkillsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutSkillsInput, Prisma.ProfileUpdateWithoutSkillsInput>, Prisma.ProfileUncheckedUpdateWithoutSkillsInput>;
};
export type ProfileCreateNestedOneWithoutInterestsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutInterestsInput, Prisma.ProfileUncheckedCreateWithoutInterestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutInterestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutInterestsInput, Prisma.ProfileUncheckedCreateWithoutInterestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutInterestsInput;
    upsert?: Prisma.ProfileUpsertWithoutInterestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutInterestsInput, Prisma.ProfileUpdateWithoutInterestsInput>, Prisma.ProfileUncheckedUpdateWithoutInterestsInput>;
};
export type ProfileCreateNestedOneWithoutAvailabilityInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAvailabilityInput, Prisma.ProfileUncheckedCreateWithoutAvailabilityInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAvailabilityInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAvailabilityInput, Prisma.ProfileUncheckedCreateWithoutAvailabilityInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAvailabilityInput;
    upsert?: Prisma.ProfileUpsertWithoutAvailabilityInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAvailabilityInput, Prisma.ProfileUpdateWithoutAvailabilityInput>, Prisma.ProfileUncheckedUpdateWithoutAvailabilityInput>;
};
export type ProfileCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.ProfileSkillCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestUncheckedCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
};
export type ProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutUserInput, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutUserInput, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.ProfileSkillUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.ProfileSkillUncheckedUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUncheckedUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutSkillsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    interests?: Prisma.ProfileInterestCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutSkillsInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interests?: Prisma.ProfileInterestUncheckedCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutSkillsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutSkillsInput, Prisma.ProfileUncheckedCreateWithoutSkillsInput>;
};
export type ProfileUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutSkillsInput, Prisma.ProfileUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutSkillsInput, Prisma.ProfileUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutSkillsInput, Prisma.ProfileUncheckedUpdateWithoutSkillsInput>;
};
export type ProfileUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interests?: Prisma.ProfileInterestUncheckedUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutInterestsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    skills?: Prisma.ProfileSkillCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutInterestsInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutProfileInput;
    availability?: Prisma.AvailabilityUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutInterestsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutInterestsInput, Prisma.ProfileUncheckedCreateWithoutInterestsInput>;
};
export type ProfileUpsertWithoutInterestsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutInterestsInput, Prisma.ProfileUncheckedUpdateWithoutInterestsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutInterestsInput, Prisma.ProfileUncheckedCreateWithoutInterestsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutInterestsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutInterestsInput, Prisma.ProfileUncheckedUpdateWithoutInterestsInput>;
};
export type ProfileUpdateWithoutInterestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    skills?: Prisma.ProfileSkillUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutInterestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.ProfileSkillUncheckedUpdateManyWithoutProfileNestedInput;
    availability?: Prisma.AvailabilityUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutAvailabilityInput = {
    id?: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    skills?: Prisma.ProfileSkillCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAvailabilityInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    yearOfStudy?: number | null;
    faculty: string;
    department: string;
    goalStatement: string;
    goalVector?: Prisma.ProfileCreategoalVectorInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutProfileInput;
    interests?: Prisma.ProfileInterestUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAvailabilityInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAvailabilityInput, Prisma.ProfileUncheckedCreateWithoutAvailabilityInput>;
};
export type ProfileUpsertWithoutAvailabilityInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAvailabilityInput, Prisma.ProfileUncheckedUpdateWithoutAvailabilityInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAvailabilityInput, Prisma.ProfileUncheckedCreateWithoutAvailabilityInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAvailabilityInput, Prisma.ProfileUncheckedUpdateWithoutAvailabilityInput>;
};
export type ProfileUpdateWithoutAvailabilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    skills?: Prisma.ProfileSkillUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAvailabilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    yearOfStudy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    goalStatement?: Prisma.StringFieldUpdateOperationsInput | string;
    goalVector?: Prisma.ProfileUpdategoalVectorInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.ProfileSkillUncheckedUpdateManyWithoutProfileNestedInput;
    interests?: Prisma.ProfileInterestUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCountOutputType = {
    skills: number;
    interests: number;
    availability: number;
};
export type ProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | ProfileCountOutputTypeCountSkillsArgs;
    interests?: boolean | ProfileCountOutputTypeCountInterestsArgs;
    availability?: boolean | ProfileCountOutputTypeCountAvailabilityArgs;
};
export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfileCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileSkillWhereInput;
};
export type ProfileCountOutputTypeCountInterestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileInterestWhereInput;
};
export type ProfileCountOutputTypeCountAvailabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityWhereInput;
};
export type ProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    yearOfStudy?: boolean;
    faculty?: boolean;
    department?: boolean;
    goalStatement?: boolean;
    goalVector?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Profile$skillsArgs<ExtArgs>;
    interests?: boolean | Prisma.Profile$interestsArgs<ExtArgs>;
    availability?: boolean | Prisma.Profile$availabilityArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    yearOfStudy?: boolean;
    faculty?: boolean;
    department?: boolean;
    goalStatement?: boolean;
    goalVector?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    yearOfStudy?: boolean;
    faculty?: boolean;
    department?: boolean;
    goalStatement?: boolean;
    goalVector?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    yearOfStudy?: boolean;
    faculty?: boolean;
    department?: boolean;
    goalStatement?: boolean;
    goalVector?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "yearOfStudy" | "faculty" | "department" | "goalStatement" | "goalVector" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>;
export type ProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Profile$skillsArgs<ExtArgs>;
    interests?: boolean | Prisma.Profile$interestsArgs<ExtArgs>;
    availability?: boolean | Prisma.Profile$availabilityArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        skills: Prisma.$ProfileSkillPayload<ExtArgs>[];
        interests: Prisma.$ProfileInterestPayload<ExtArgs>[];
        availability: Prisma.$AvailabilityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        firstName: string;
        lastName: string;
        yearOfStudy: number | null;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profile"]>;
    composites: {};
};
export type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePayload, S>;
export type ProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
};
export interface ProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
        meta: {
            name: 'Profile';
        };
    };
    findUnique<T extends ProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileCreateArgs>(args: Prisma.SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileCountArgs>(args?: Prisma.Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileCountAggregateOutputType> : number>;
    aggregate<T extends ProfileAggregateArgs>(args: Prisma.Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
    groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileFieldRefs;
}
export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.Profile$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interests<T extends Prisma.Profile$interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    availability<T extends Prisma.Profile$availabilityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileFieldRefs {
    readonly id: Prisma.FieldRef<"Profile", 'String'>;
    readonly userId: Prisma.FieldRef<"Profile", 'String'>;
    readonly firstName: Prisma.FieldRef<"Profile", 'String'>;
    readonly lastName: Prisma.FieldRef<"Profile", 'String'>;
    readonly yearOfStudy: Prisma.FieldRef<"Profile", 'Int'>;
    readonly faculty: Prisma.FieldRef<"Profile", 'String'>;
    readonly department: Prisma.FieldRef<"Profile", 'String'>;
    readonly goalStatement: Prisma.FieldRef<"Profile", 'String'>;
    readonly goalVector: Prisma.FieldRef<"Profile", 'Float[]'>;
    readonly createdAt: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Profile", 'DateTime'>;
}
export type ProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
};
export type ProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type ProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
    include?: Prisma.ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
};
export type ProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type Profile$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    where?: Prisma.ProfileSkillWhereInput;
    orderBy?: Prisma.ProfileSkillOrderByWithRelationInput | Prisma.ProfileSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProfileSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileSkillScalarFieldEnum | Prisma.ProfileSkillScalarFieldEnum[];
};
export type Profile$interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithRelationInput | Prisma.ProfileInterestOrderByWithRelationInput[];
    cursor?: Prisma.ProfileInterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileInterestScalarFieldEnum | Prisma.ProfileInterestScalarFieldEnum[];
};
export type Profile$availabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithRelationInput | Prisma.AvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityScalarFieldEnum | Prisma.AvailabilityScalarFieldEnum[];
};
export type ProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
};
