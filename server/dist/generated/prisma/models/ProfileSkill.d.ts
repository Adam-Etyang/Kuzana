import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileSkillModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileSkillPayload>;
export type AggregateProfileSkill = {
    _count: ProfileSkillCountAggregateOutputType | null;
    _min: ProfileSkillMinAggregateOutputType | null;
    _max: ProfileSkillMaxAggregateOutputType | null;
};
export type ProfileSkillMinAggregateOutputType = {
    profileId: string | null;
    skillId: string | null;
};
export type ProfileSkillMaxAggregateOutputType = {
    profileId: string | null;
    skillId: string | null;
};
export type ProfileSkillCountAggregateOutputType = {
    profileId: number;
    skillId: number;
    _all: number;
};
export type ProfileSkillMinAggregateInputType = {
    profileId?: true;
    skillId?: true;
};
export type ProfileSkillMaxAggregateInputType = {
    profileId?: true;
    skillId?: true;
};
export type ProfileSkillCountAggregateInputType = {
    profileId?: true;
    skillId?: true;
    _all?: true;
};
export type ProfileSkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileSkillWhereInput;
    orderBy?: Prisma.ProfileSkillOrderByWithRelationInput | Prisma.ProfileSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProfileSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileSkillCountAggregateInputType;
    _min?: ProfileSkillMinAggregateInputType;
    _max?: ProfileSkillMaxAggregateInputType;
};
export type GetProfileSkillAggregateType<T extends ProfileSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileSkill[P]> : Prisma.GetScalarType<T[P], AggregateProfileSkill[P]>;
};
export type ProfileSkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileSkillWhereInput;
    orderBy?: Prisma.ProfileSkillOrderByWithAggregationInput | Prisma.ProfileSkillOrderByWithAggregationInput[];
    by: Prisma.ProfileSkillScalarFieldEnum[] | Prisma.ProfileSkillScalarFieldEnum;
    having?: Prisma.ProfileSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileSkillCountAggregateInputType | true;
    _min?: ProfileSkillMinAggregateInputType;
    _max?: ProfileSkillMaxAggregateInputType;
};
export type ProfileSkillGroupByOutputType = {
    profileId: string;
    skillId: string;
    _count: ProfileSkillCountAggregateOutputType | null;
    _min: ProfileSkillMinAggregateOutputType | null;
    _max: ProfileSkillMaxAggregateOutputType | null;
};
export type GetProfileSkillGroupByPayload<T extends ProfileSkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileSkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileSkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileSkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileSkillGroupByOutputType[P]>;
}>>;
export type ProfileSkillWhereInput = {
    AND?: Prisma.ProfileSkillWhereInput | Prisma.ProfileSkillWhereInput[];
    OR?: Prisma.ProfileSkillWhereInput[];
    NOT?: Prisma.ProfileSkillWhereInput | Prisma.ProfileSkillWhereInput[];
    profileId?: Prisma.StringFilter<"ProfileSkill"> | string;
    skillId?: Prisma.StringFilter<"ProfileSkill"> | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
};
export type ProfileSkillOrderByWithRelationInput = {
    profileId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    skill?: Prisma.SkillOrderByWithRelationInput;
};
export type ProfileSkillWhereUniqueInput = Prisma.AtLeast<{
    profileId_skillId?: Prisma.ProfileSkillProfileIdSkillIdCompoundUniqueInput;
    AND?: Prisma.ProfileSkillWhereInput | Prisma.ProfileSkillWhereInput[];
    OR?: Prisma.ProfileSkillWhereInput[];
    NOT?: Prisma.ProfileSkillWhereInput | Prisma.ProfileSkillWhereInput[];
    profileId?: Prisma.StringFilter<"ProfileSkill"> | string;
    skillId?: Prisma.StringFilter<"ProfileSkill"> | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
}, "profileId_skillId">;
export type ProfileSkillOrderByWithAggregationInput = {
    profileId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    _count?: Prisma.ProfileSkillCountOrderByAggregateInput;
    _max?: Prisma.ProfileSkillMaxOrderByAggregateInput;
    _min?: Prisma.ProfileSkillMinOrderByAggregateInput;
};
export type ProfileSkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileSkillScalarWhereWithAggregatesInput | Prisma.ProfileSkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileSkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileSkillScalarWhereWithAggregatesInput | Prisma.ProfileSkillScalarWhereWithAggregatesInput[];
    profileId?: Prisma.StringWithAggregatesFilter<"ProfileSkill"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"ProfileSkill"> | string;
};
export type ProfileSkillCreateInput = {
    profile: Prisma.ProfileCreateNestedOneWithoutSkillsInput;
    skill: Prisma.SkillCreateNestedOneWithoutProfilesInput;
};
export type ProfileSkillUncheckedCreateInput = {
    profileId: string;
    skillId: string;
};
export type ProfileSkillUpdateInput = {
    profile?: Prisma.ProfileUpdateOneRequiredWithoutSkillsNestedInput;
    skill?: Prisma.SkillUpdateOneRequiredWithoutProfilesNestedInput;
};
export type ProfileSkillUncheckedUpdateInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillCreateManyInput = {
    profileId: string;
    skillId: string;
};
export type ProfileSkillUpdateManyMutationInput = {};
export type ProfileSkillUncheckedUpdateManyInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillListRelationFilter = {
    every?: Prisma.ProfileSkillWhereInput;
    some?: Prisma.ProfileSkillWhereInput;
    none?: Prisma.ProfileSkillWhereInput;
};
export type ProfileSkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileSkillProfileIdSkillIdCompoundUniqueInput = {
    profileId: string;
    skillId: string;
};
export type ProfileSkillCountOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProfileSkillMaxOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProfileSkillMinOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProfileSkillCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput> | Prisma.ProfileSkillCreateWithoutProfileInput[] | Prisma.ProfileSkillUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutProfileInput | Prisma.ProfileSkillCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileSkillCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
};
export type ProfileSkillUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput> | Prisma.ProfileSkillCreateWithoutProfileInput[] | Prisma.ProfileSkillUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutProfileInput | Prisma.ProfileSkillCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileSkillCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
};
export type ProfileSkillUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput> | Prisma.ProfileSkillCreateWithoutProfileInput[] | Prisma.ProfileSkillUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutProfileInput | Prisma.ProfileSkillCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileSkillUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileSkillUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileSkillCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    disconnect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    delete?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    update?: Prisma.ProfileSkillUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileSkillUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileSkillUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileSkillUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
};
export type ProfileSkillUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput> | Prisma.ProfileSkillCreateWithoutProfileInput[] | Prisma.ProfileSkillUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutProfileInput | Prisma.ProfileSkillCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileSkillUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileSkillUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileSkillCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    disconnect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    delete?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    update?: Prisma.ProfileSkillUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileSkillUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileSkillUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileSkillUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
};
export type ProfileSkillCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput> | Prisma.ProfileSkillCreateWithoutSkillInput[] | Prisma.ProfileSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutSkillInput | Prisma.ProfileSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProfileSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
};
export type ProfileSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput> | Prisma.ProfileSkillCreateWithoutSkillInput[] | Prisma.ProfileSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutSkillInput | Prisma.ProfileSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProfileSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
};
export type ProfileSkillUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput> | Prisma.ProfileSkillCreateWithoutSkillInput[] | Prisma.ProfileSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutSkillInput | Prisma.ProfileSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProfileSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProfileSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProfileSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    disconnect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    delete?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    update?: Prisma.ProfileSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProfileSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProfileSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProfileSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
};
export type ProfileSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput> | Prisma.ProfileSkillCreateWithoutSkillInput[] | Prisma.ProfileSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProfileSkillCreateOrConnectWithoutSkillInput | Prisma.ProfileSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProfileSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProfileSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProfileSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    disconnect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    delete?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    connect?: Prisma.ProfileSkillWhereUniqueInput | Prisma.ProfileSkillWhereUniqueInput[];
    update?: Prisma.ProfileSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProfileSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProfileSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProfileSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
};
export type ProfileSkillCreateWithoutProfileInput = {
    skill: Prisma.SkillCreateNestedOneWithoutProfilesInput;
};
export type ProfileSkillUncheckedCreateWithoutProfileInput = {
    skillId: string;
};
export type ProfileSkillCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput>;
};
export type ProfileSkillCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileSkillCreateManyProfileInput | Prisma.ProfileSkillCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileSkillUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileSkillUpdateWithoutProfileInput, Prisma.ProfileSkillUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileSkillCreateWithoutProfileInput, Prisma.ProfileSkillUncheckedCreateWithoutProfileInput>;
};
export type ProfileSkillUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateWithoutProfileInput, Prisma.ProfileSkillUncheckedUpdateWithoutProfileInput>;
};
export type ProfileSkillUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateManyMutationInput, Prisma.ProfileSkillUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileSkillScalarWhereInput = {
    AND?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
    OR?: Prisma.ProfileSkillScalarWhereInput[];
    NOT?: Prisma.ProfileSkillScalarWhereInput | Prisma.ProfileSkillScalarWhereInput[];
    profileId?: Prisma.StringFilter<"ProfileSkill"> | string;
    skillId?: Prisma.StringFilter<"ProfileSkill"> | string;
};
export type ProfileSkillCreateWithoutSkillInput = {
    profile: Prisma.ProfileCreateNestedOneWithoutSkillsInput;
};
export type ProfileSkillUncheckedCreateWithoutSkillInput = {
    profileId: string;
};
export type ProfileSkillCreateOrConnectWithoutSkillInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput>;
};
export type ProfileSkillCreateManySkillInputEnvelope = {
    data: Prisma.ProfileSkillCreateManySkillInput | Prisma.ProfileSkillCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type ProfileSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileSkillUpdateWithoutSkillInput, Prisma.ProfileSkillUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.ProfileSkillCreateWithoutSkillInput, Prisma.ProfileSkillUncheckedCreateWithoutSkillInput>;
};
export type ProfileSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProfileSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateWithoutSkillInput, Prisma.ProfileSkillUncheckedUpdateWithoutSkillInput>;
};
export type ProfileSkillUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.ProfileSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateManyMutationInput, Prisma.ProfileSkillUncheckedUpdateManyWithoutSkillInput>;
};
export type ProfileSkillCreateManyProfileInput = {
    skillId: string;
};
export type ProfileSkillUpdateWithoutProfileInput = {
    skill?: Prisma.SkillUpdateOneRequiredWithoutProfilesNestedInput;
};
export type ProfileSkillUncheckedUpdateWithoutProfileInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillUncheckedUpdateManyWithoutProfileInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillCreateManySkillInput = {
    profileId: string;
};
export type ProfileSkillUpdateWithoutSkillInput = {
    profile?: Prisma.ProfileUpdateOneRequiredWithoutSkillsNestedInput;
};
export type ProfileSkillUncheckedUpdateWithoutSkillInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillUncheckedUpdateManyWithoutSkillInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfileSkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    skillId?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileSkill"]>;
export type ProfileSkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    skillId?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileSkill"]>;
export type ProfileSkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    skillId?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileSkill"]>;
export type ProfileSkillSelectScalar = {
    profileId?: boolean;
    skillId?: boolean;
};
export type ProfileSkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"profileId" | "skillId", ExtArgs["result"]["profileSkill"]>;
export type ProfileSkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProfileSkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProfileSkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $ProfileSkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileSkill";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
        skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        profileId: string;
        skillId: string;
    }, ExtArgs["result"]["profileSkill"]>;
    composites: {};
};
export type ProfileSkillGetPayload<S extends boolean | null | undefined | ProfileSkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload, S>;
export type ProfileSkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileSkillCountAggregateInputType | true;
};
export interface ProfileSkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileSkill'];
        meta: {
            name: 'ProfileSkill';
        };
    };
    findUnique<T extends ProfileSkillFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileSkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileSkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileSkillFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileSkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileSkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileSkillFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileSkillCreateArgs>(args: Prisma.SelectSubset<T, ProfileSkillCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileSkillCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileSkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileSkillDeleteArgs>(args: Prisma.SelectSubset<T, ProfileSkillDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileSkillUpdateArgs>(args: Prisma.SelectSubset<T, ProfileSkillUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileSkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileSkillUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileSkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileSkillUpsertArgs>(args: Prisma.SelectSubset<T, ProfileSkillUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileSkillClient<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileSkillCountArgs>(args?: Prisma.Subset<T, ProfileSkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileSkillCountAggregateOutputType> : number>;
    aggregate<T extends ProfileSkillAggregateArgs>(args: Prisma.Subset<T, ProfileSkillAggregateArgs>): Prisma.PrismaPromise<GetProfileSkillAggregateType<T>>;
    groupBy<T extends ProfileSkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileSkillGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileSkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileSkillFieldRefs;
}
export interface Prisma__ProfileSkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileSkillFieldRefs {
    readonly profileId: Prisma.FieldRef<"ProfileSkill", 'String'>;
    readonly skillId: Prisma.FieldRef<"ProfileSkill", 'String'>;
}
export type ProfileSkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    where: Prisma.ProfileSkillWhereUniqueInput;
};
export type ProfileSkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    where: Prisma.ProfileSkillWhereUniqueInput;
};
export type ProfileSkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfileSkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfileSkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfileSkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileSkillCreateInput, Prisma.ProfileSkillUncheckedCreateInput>;
};
export type ProfileSkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileSkillCreateManyInput | Prisma.ProfileSkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileSkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    data: Prisma.ProfileSkillCreateManyInput | Prisma.ProfileSkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfileSkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfileSkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateInput, Prisma.ProfileSkillUncheckedUpdateInput>;
    where: Prisma.ProfileSkillWhereUniqueInput;
};
export type ProfileSkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileSkillUpdateManyMutationInput, Prisma.ProfileSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProfileSkillWhereInput;
    limit?: number;
};
export type ProfileSkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileSkillUpdateManyMutationInput, Prisma.ProfileSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProfileSkillWhereInput;
    limit?: number;
    include?: Prisma.ProfileSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfileSkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    where: Prisma.ProfileSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileSkillCreateInput, Prisma.ProfileSkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileSkillUpdateInput, Prisma.ProfileSkillUncheckedUpdateInput>;
};
export type ProfileSkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
    where: Prisma.ProfileSkillWhereUniqueInput;
};
export type ProfileSkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileSkillWhereInput;
    limit?: number;
};
export type ProfileSkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProfileSkillOmit<ExtArgs> | null;
    include?: Prisma.ProfileSkillInclude<ExtArgs> | null;
};
