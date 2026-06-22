import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    role: $Enums.Role | null;
    institutionRole: $Enums.InstitutionRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    role: $Enums.Role | null;
    institutionRole: $Enums.InstitutionRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    emailVerified: number;
    image: number;
    role: number;
    institutionRole: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    role?: true;
    institutionRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    role?: true;
    institutionRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    role?: true;
    institutionRole?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string | null;
    email: string;
    emailVerified: boolean;
    image: string | null;
    role: $Enums.Role;
    institutionRole: $Enums.InstitutionRole | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    institutionRole?: Prisma.EnumInstitutionRoleNullableFilter<"User"> | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    mentorProfile?: Prisma.XOR<Prisma.MentorProfileNullableScalarRelationFilter, Prisma.MentorProfileWhereInput> | null;
    sessions?: Prisma.SessionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    institutionRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    mentorProfile?: Prisma.MentorProfileOrderByWithRelationInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    institutionRole?: Prisma.EnumInstitutionRoleNullableFilter<"User"> | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    mentorProfile?: Prisma.XOR<Prisma.MentorProfileNullableScalarRelationFilter, Prisma.MentorProfileWhereInput> | null;
    sessions?: Prisma.SessionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    institutionRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    institutionRole?: Prisma.EnumInstitutionRoleNullableWithAggregatesFilter<"User"> | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileUncheckedCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUncheckedUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    institutionRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    institutionRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    institutionRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type NullableEnumInstitutionRoleFieldUpdateOperationsInput = {
    set?: $Enums.InstitutionRole | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutMentorProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMentorProfileInput, Prisma.UserUncheckedCreateWithoutMentorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMentorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMentorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMentorProfileInput, Prisma.UserUncheckedCreateWithoutMentorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMentorProfileInput;
    upsert?: Prisma.UserUpsertWithoutMentorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMentorProfileInput, Prisma.UserUpdateWithoutMentorProfileInput>, Prisma.UserUncheckedUpdateWithoutMentorProfileInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserCreateWithoutProfileInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentorProfile?: Prisma.MentorProfileCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentorProfile?: Prisma.MentorProfileUncheckedCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mentorProfile?: Prisma.MentorProfileUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mentorProfile?: Prisma.MentorProfileUncheckedUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMentorProfileInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMentorProfileInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMentorProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMentorProfileInput, Prisma.UserUncheckedCreateWithoutMentorProfileInput>;
};
export type UserUpsertWithoutMentorProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMentorProfileInput, Prisma.UserUncheckedUpdateWithoutMentorProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMentorProfileInput, Prisma.UserUncheckedCreateWithoutMentorProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMentorProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMentorProfileInput, Prisma.UserUncheckedUpdateWithoutMentorProfileInput>;
};
export type UserUpdateWithoutMentorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMentorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileCreateNestedOneWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileUncheckedCreateNestedOneWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUpdateOneWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUncheckedUpdateOneWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAccountsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    role?: $Enums.Role;
    institutionRole?: $Enums.InstitutionRole | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    mentorProfile?: Prisma.MentorProfileUncheckedCreateNestedOneWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
};
export type UserUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    institutionRole?: Prisma.NullableEnumInstitutionRoleFieldUpdateOperationsInput | $Enums.InstitutionRole | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    mentorProfile?: Prisma.MentorProfileUncheckedUpdateOneWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    sessions: number;
    accounts: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    role?: boolean;
    institutionRole?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    mentorProfile?: boolean | Prisma.User$mentorProfileArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    role?: boolean;
    institutionRole?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    role?: boolean;
    institutionRole?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    role?: boolean;
    institutionRole?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "institutionRole" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    mentorProfile?: boolean | Prisma.User$mentorProfileArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
        mentorProfile: Prisma.$MentorProfilePayload<ExtArgs> | null;
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        accounts: Prisma.$AccountPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: $Enums.Role;
        institutionRole: $Enums.InstitutionRole | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.User$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mentorProfile<T extends Prisma.User$mentorProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$mentorProfileArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly image: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly institutionRole: Prisma.FieldRef<"User", 'InstitutionRole'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type User$mentorProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where?: Prisma.MentorProfileWhereInput;
};
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
