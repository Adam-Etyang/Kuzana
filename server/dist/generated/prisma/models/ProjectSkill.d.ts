import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectSkillModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectSkillPayload>;
export type AggregateProjectSkill = {
    _count: ProjectSkillCountAggregateOutputType | null;
    _min: ProjectSkillMinAggregateOutputType | null;
    _max: ProjectSkillMaxAggregateOutputType | null;
};
export type ProjectSkillMinAggregateOutputType = {
    projectId: string | null;
    skillId: string | null;
};
export type ProjectSkillMaxAggregateOutputType = {
    projectId: string | null;
    skillId: string | null;
};
export type ProjectSkillCountAggregateOutputType = {
    projectId: number;
    skillId: number;
    _all: number;
};
export type ProjectSkillMinAggregateInputType = {
    projectId?: true;
    skillId?: true;
};
export type ProjectSkillMaxAggregateInputType = {
    projectId?: true;
    skillId?: true;
};
export type ProjectSkillCountAggregateInputType = {
    projectId?: true;
    skillId?: true;
    _all?: true;
};
export type ProjectSkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectSkillWhereInput;
    orderBy?: Prisma.ProjectSkillOrderByWithRelationInput | Prisma.ProjectSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProjectSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectSkillCountAggregateInputType;
    _min?: ProjectSkillMinAggregateInputType;
    _max?: ProjectSkillMaxAggregateInputType;
};
export type GetProjectSkillAggregateType<T extends ProjectSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectSkill[P]> : Prisma.GetScalarType<T[P], AggregateProjectSkill[P]>;
};
export type ProjectSkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectSkillWhereInput;
    orderBy?: Prisma.ProjectSkillOrderByWithAggregationInput | Prisma.ProjectSkillOrderByWithAggregationInput[];
    by: Prisma.ProjectSkillScalarFieldEnum[] | Prisma.ProjectSkillScalarFieldEnum;
    having?: Prisma.ProjectSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectSkillCountAggregateInputType | true;
    _min?: ProjectSkillMinAggregateInputType;
    _max?: ProjectSkillMaxAggregateInputType;
};
export type ProjectSkillGroupByOutputType = {
    projectId: string;
    skillId: string;
    _count: ProjectSkillCountAggregateOutputType | null;
    _min: ProjectSkillMinAggregateOutputType | null;
    _max: ProjectSkillMaxAggregateOutputType | null;
};
export type GetProjectSkillGroupByPayload<T extends ProjectSkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectSkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectSkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectSkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectSkillGroupByOutputType[P]>;
}>>;
export type ProjectSkillWhereInput = {
    AND?: Prisma.ProjectSkillWhereInput | Prisma.ProjectSkillWhereInput[];
    OR?: Prisma.ProjectSkillWhereInput[];
    NOT?: Prisma.ProjectSkillWhereInput | Prisma.ProjectSkillWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectSkill"> | string;
    skillId?: Prisma.StringFilter<"ProjectSkill"> | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
};
export type ProjectSkillOrderByWithRelationInput = {
    projectId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    skill?: Prisma.SkillOrderByWithRelationInput;
};
export type ProjectSkillWhereUniqueInput = Prisma.AtLeast<{
    projectId_skillId?: Prisma.ProjectSkillProjectIdSkillIdCompoundUniqueInput;
    AND?: Prisma.ProjectSkillWhereInput | Prisma.ProjectSkillWhereInput[];
    OR?: Prisma.ProjectSkillWhereInput[];
    NOT?: Prisma.ProjectSkillWhereInput | Prisma.ProjectSkillWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectSkill"> | string;
    skillId?: Prisma.StringFilter<"ProjectSkill"> | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
}, "projectId_skillId">;
export type ProjectSkillOrderByWithAggregationInput = {
    projectId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    _count?: Prisma.ProjectSkillCountOrderByAggregateInput;
    _max?: Prisma.ProjectSkillMaxOrderByAggregateInput;
    _min?: Prisma.ProjectSkillMinOrderByAggregateInput;
};
export type ProjectSkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectSkillScalarWhereWithAggregatesInput | Prisma.ProjectSkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectSkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectSkillScalarWhereWithAggregatesInput | Prisma.ProjectSkillScalarWhereWithAggregatesInput[];
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectSkill"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"ProjectSkill"> | string;
};
export type ProjectSkillCreateInput = {
    project: Prisma.ProjectCreateNestedOneWithoutRequiredSkillsInput;
    skill: Prisma.SkillCreateNestedOneWithoutProjectsInput;
};
export type ProjectSkillUncheckedCreateInput = {
    projectId: string;
    skillId: string;
};
export type ProjectSkillUpdateInput = {
    project?: Prisma.ProjectUpdateOneRequiredWithoutRequiredSkillsNestedInput;
    skill?: Prisma.SkillUpdateOneRequiredWithoutProjectsNestedInput;
};
export type ProjectSkillUncheckedUpdateInput = {
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillCreateManyInput = {
    projectId: string;
    skillId: string;
};
export type ProjectSkillUpdateManyMutationInput = {};
export type ProjectSkillUncheckedUpdateManyInput = {
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillListRelationFilter = {
    every?: Prisma.ProjectSkillWhereInput;
    some?: Prisma.ProjectSkillWhereInput;
    none?: Prisma.ProjectSkillWhereInput;
};
export type ProjectSkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectSkillProjectIdSkillIdCompoundUniqueInput = {
    projectId: string;
    skillId: string;
};
export type ProjectSkillCountOrderByAggregateInput = {
    projectId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProjectSkillMaxOrderByAggregateInput = {
    projectId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProjectSkillMinOrderByAggregateInput = {
    projectId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
};
export type ProjectSkillCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput> | Prisma.ProjectSkillCreateWithoutSkillInput[] | Prisma.ProjectSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutSkillInput | Prisma.ProjectSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProjectSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
};
export type ProjectSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput> | Prisma.ProjectSkillCreateWithoutSkillInput[] | Prisma.ProjectSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutSkillInput | Prisma.ProjectSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProjectSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
};
export type ProjectSkillUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput> | Prisma.ProjectSkillCreateWithoutSkillInput[] | Prisma.ProjectSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutSkillInput | Prisma.ProjectSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProjectSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    disconnect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    delete?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    update?: Prisma.ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProjectSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProjectSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
};
export type ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput> | Prisma.ProjectSkillCreateWithoutSkillInput[] | Prisma.ProjectSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutSkillInput | Prisma.ProjectSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProjectSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProjectSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProjectSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    disconnect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    delete?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    update?: Prisma.ProjectSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProjectSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProjectSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProjectSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
};
export type ProjectSkillCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput> | Prisma.ProjectSkillCreateWithoutProjectInput[] | Prisma.ProjectSkillUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutProjectInput | Prisma.ProjectSkillCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectSkillCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
};
export type ProjectSkillUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput> | Prisma.ProjectSkillCreateWithoutProjectInput[] | Prisma.ProjectSkillUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutProjectInput | Prisma.ProjectSkillCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectSkillCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
};
export type ProjectSkillUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput> | Prisma.ProjectSkillCreateWithoutProjectInput[] | Prisma.ProjectSkillUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutProjectInput | Prisma.ProjectSkillCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectSkillCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    disconnect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    delete?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    update?: Prisma.ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectSkillUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectSkillUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
};
export type ProjectSkillUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput> | Prisma.ProjectSkillCreateWithoutProjectInput[] | Prisma.ProjectSkillUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectSkillCreateOrConnectWithoutProjectInput | Prisma.ProjectSkillCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectSkillUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectSkillUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectSkillCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    disconnect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    delete?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    connect?: Prisma.ProjectSkillWhereUniqueInput | Prisma.ProjectSkillWhereUniqueInput[];
    update?: Prisma.ProjectSkillUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectSkillUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectSkillUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectSkillUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
};
export type ProjectSkillCreateWithoutSkillInput = {
    project: Prisma.ProjectCreateNestedOneWithoutRequiredSkillsInput;
};
export type ProjectSkillUncheckedCreateWithoutSkillInput = {
    projectId: string;
};
export type ProjectSkillCreateOrConnectWithoutSkillInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput>;
};
export type ProjectSkillCreateManySkillInputEnvelope = {
    data: Prisma.ProjectSkillCreateManySkillInput | Prisma.ProjectSkillCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type ProjectSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectSkillUpdateWithoutSkillInput, Prisma.ProjectSkillUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.ProjectSkillCreateWithoutSkillInput, Prisma.ProjectSkillUncheckedCreateWithoutSkillInput>;
};
export type ProjectSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateWithoutSkillInput, Prisma.ProjectSkillUncheckedUpdateWithoutSkillInput>;
};
export type ProjectSkillUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.ProjectSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateManyMutationInput, Prisma.ProjectSkillUncheckedUpdateManyWithoutSkillInput>;
};
export type ProjectSkillScalarWhereInput = {
    AND?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
    OR?: Prisma.ProjectSkillScalarWhereInput[];
    NOT?: Prisma.ProjectSkillScalarWhereInput | Prisma.ProjectSkillScalarWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectSkill"> | string;
    skillId?: Prisma.StringFilter<"ProjectSkill"> | string;
};
export type ProjectSkillCreateWithoutProjectInput = {
    skill: Prisma.SkillCreateNestedOneWithoutProjectsInput;
};
export type ProjectSkillUncheckedCreateWithoutProjectInput = {
    skillId: string;
};
export type ProjectSkillCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput>;
};
export type ProjectSkillCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectSkillCreateManyProjectInput | Prisma.ProjectSkillCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectSkillUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectSkillUpdateWithoutProjectInput, Prisma.ProjectSkillUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectSkillCreateWithoutProjectInput, Prisma.ProjectSkillUncheckedCreateWithoutProjectInput>;
};
export type ProjectSkillUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateWithoutProjectInput, Prisma.ProjectSkillUncheckedUpdateWithoutProjectInput>;
};
export type ProjectSkillUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateManyMutationInput, Prisma.ProjectSkillUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectSkillCreateManySkillInput = {
    projectId: string;
};
export type ProjectSkillUpdateWithoutSkillInput = {
    project?: Prisma.ProjectUpdateOneRequiredWithoutRequiredSkillsNestedInput;
};
export type ProjectSkillUncheckedUpdateWithoutSkillInput = {
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillUncheckedUpdateManyWithoutSkillInput = {
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillCreateManyProjectInput = {
    skillId: string;
};
export type ProjectSkillUpdateWithoutProjectInput = {
    skill?: Prisma.SkillUpdateOneRequiredWithoutProjectsNestedInput;
};
export type ProjectSkillUncheckedUpdateWithoutProjectInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillUncheckedUpdateManyWithoutProjectInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectSkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    projectId?: boolean;
    skillId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectSkill"]>;
export type ProjectSkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    projectId?: boolean;
    skillId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectSkill"]>;
export type ProjectSkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    projectId?: boolean;
    skillId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectSkill"]>;
export type ProjectSkillSelectScalar = {
    projectId?: boolean;
    skillId?: boolean;
};
export type ProjectSkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"projectId" | "skillId", ExtArgs["result"]["projectSkill"]>;
export type ProjectSkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProjectSkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProjectSkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $ProjectSkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectSkill";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        projectId: string;
        skillId: string;
    }, ExtArgs["result"]["projectSkill"]>;
    composites: {};
};
export type ProjectSkillGetPayload<S extends boolean | null | undefined | ProjectSkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload, S>;
export type ProjectSkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectSkillCountAggregateInputType | true;
};
export interface ProjectSkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectSkill'];
        meta: {
            name: 'ProjectSkill';
        };
    };
    findUnique<T extends ProjectSkillFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectSkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectSkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectSkillFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectSkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectSkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectSkillFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectSkillCreateArgs>(args: Prisma.SelectSubset<T, ProjectSkillCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectSkillCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectSkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectSkillDeleteArgs>(args: Prisma.SelectSubset<T, ProjectSkillDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectSkillUpdateArgs>(args: Prisma.SelectSubset<T, ProjectSkillUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectSkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectSkillUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectSkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectSkillUpsertArgs>(args: Prisma.SelectSubset<T, ProjectSkillUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectSkillClient<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectSkillCountArgs>(args?: Prisma.Subset<T, ProjectSkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectSkillCountAggregateOutputType> : number>;
    aggregate<T extends ProjectSkillAggregateArgs>(args: Prisma.Subset<T, ProjectSkillAggregateArgs>): Prisma.PrismaPromise<GetProjectSkillAggregateType<T>>;
    groupBy<T extends ProjectSkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectSkillGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectSkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectSkillFieldRefs;
}
export interface Prisma__ProjectSkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectSkillFieldRefs {
    readonly projectId: Prisma.FieldRef<"ProjectSkill", 'String'>;
    readonly skillId: Prisma.FieldRef<"ProjectSkill", 'String'>;
}
export type ProjectSkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where: Prisma.ProjectSkillWhereUniqueInput;
};
export type ProjectSkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where: Prisma.ProjectSkillWhereUniqueInput;
};
export type ProjectSkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where?: Prisma.ProjectSkillWhereInput;
    orderBy?: Prisma.ProjectSkillOrderByWithRelationInput | Prisma.ProjectSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProjectSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectSkillScalarFieldEnum | Prisma.ProjectSkillScalarFieldEnum[];
};
export type ProjectSkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where?: Prisma.ProjectSkillWhereInput;
    orderBy?: Prisma.ProjectSkillOrderByWithRelationInput | Prisma.ProjectSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProjectSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectSkillScalarFieldEnum | Prisma.ProjectSkillScalarFieldEnum[];
};
export type ProjectSkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where?: Prisma.ProjectSkillWhereInput;
    orderBy?: Prisma.ProjectSkillOrderByWithRelationInput | Prisma.ProjectSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProjectSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectSkillScalarFieldEnum | Prisma.ProjectSkillScalarFieldEnum[];
};
export type ProjectSkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectSkillCreateInput, Prisma.ProjectSkillUncheckedCreateInput>;
};
export type ProjectSkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectSkillCreateManyInput | Prisma.ProjectSkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectSkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    data: Prisma.ProjectSkillCreateManyInput | Prisma.ProjectSkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectSkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectSkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateInput, Prisma.ProjectSkillUncheckedUpdateInput>;
    where: Prisma.ProjectSkillWhereUniqueInput;
};
export type ProjectSkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectSkillUpdateManyMutationInput, Prisma.ProjectSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProjectSkillWhereInput;
    limit?: number;
};
export type ProjectSkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectSkillUpdateManyMutationInput, Prisma.ProjectSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProjectSkillWhereInput;
    limit?: number;
    include?: Prisma.ProjectSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectSkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where: Prisma.ProjectSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectSkillCreateInput, Prisma.ProjectSkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectSkillUpdateInput, Prisma.ProjectSkillUncheckedUpdateInput>;
};
export type ProjectSkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
    where: Prisma.ProjectSkillWhereUniqueInput;
};
export type ProjectSkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectSkillWhereInput;
    limit?: number;
};
export type ProjectSkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProjectSkillOmit<ExtArgs> | null;
    include?: Prisma.ProjectSkillInclude<ExtArgs> | null;
};
