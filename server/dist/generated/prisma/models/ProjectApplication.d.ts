import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectApplicationPayload>;
export type AggregateProjectApplication = {
    _count: ProjectApplicationCountAggregateOutputType | null;
    _min: ProjectApplicationMinAggregateOutputType | null;
    _max: ProjectApplicationMaxAggregateOutputType | null;
};
export type ProjectApplicationMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    applicantId: string | null;
    status: $Enums.ApplicationStatus | null;
    appliedAt: Date | null;
};
export type ProjectApplicationMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    applicantId: string | null;
    status: $Enums.ApplicationStatus | null;
    appliedAt: Date | null;
};
export type ProjectApplicationCountAggregateOutputType = {
    id: number;
    projectId: number;
    applicantId: number;
    status: number;
    appliedAt: number;
    _all: number;
};
export type ProjectApplicationMinAggregateInputType = {
    id?: true;
    projectId?: true;
    applicantId?: true;
    status?: true;
    appliedAt?: true;
};
export type ProjectApplicationMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    applicantId?: true;
    status?: true;
    appliedAt?: true;
};
export type ProjectApplicationCountAggregateInputType = {
    id?: true;
    projectId?: true;
    applicantId?: true;
    status?: true;
    appliedAt?: true;
    _all?: true;
};
export type ProjectApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectApplicationWhereInput;
    orderBy?: Prisma.ProjectApplicationOrderByWithRelationInput | Prisma.ProjectApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectApplicationCountAggregateInputType;
    _min?: ProjectApplicationMinAggregateInputType;
    _max?: ProjectApplicationMaxAggregateInputType;
};
export type GetProjectApplicationAggregateType<T extends ProjectApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectApplication[P]> : Prisma.GetScalarType<T[P], AggregateProjectApplication[P]>;
};
export type ProjectApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectApplicationWhereInput;
    orderBy?: Prisma.ProjectApplicationOrderByWithAggregationInput | Prisma.ProjectApplicationOrderByWithAggregationInput[];
    by: Prisma.ProjectApplicationScalarFieldEnum[] | Prisma.ProjectApplicationScalarFieldEnum;
    having?: Prisma.ProjectApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectApplicationCountAggregateInputType | true;
    _min?: ProjectApplicationMinAggregateInputType;
    _max?: ProjectApplicationMaxAggregateInputType;
};
export type ProjectApplicationGroupByOutputType = {
    id: string;
    projectId: string;
    applicantId: string;
    status: $Enums.ApplicationStatus;
    appliedAt: Date;
    _count: ProjectApplicationCountAggregateOutputType | null;
    _min: ProjectApplicationMinAggregateOutputType | null;
    _max: ProjectApplicationMaxAggregateOutputType | null;
};
export type GetProjectApplicationGroupByPayload<T extends ProjectApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectApplicationGroupByOutputType[P]>;
}>>;
export type ProjectApplicationWhereInput = {
    AND?: Prisma.ProjectApplicationWhereInput | Prisma.ProjectApplicationWhereInput[];
    OR?: Prisma.ProjectApplicationWhereInput[];
    NOT?: Prisma.ProjectApplicationWhereInput | Prisma.ProjectApplicationWhereInput[];
    id?: Prisma.StringFilter<"ProjectApplication"> | string;
    projectId?: Prisma.StringFilter<"ProjectApplication"> | string;
    applicantId?: Prisma.StringFilter<"ProjectApplication"> | string;
    status?: Prisma.EnumApplicationStatusFilter<"ProjectApplication"> | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFilter<"ProjectApplication"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type ProjectApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type ProjectApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId_applicantId?: Prisma.ProjectApplicationProjectIdApplicantIdCompoundUniqueInput;
    AND?: Prisma.ProjectApplicationWhereInput | Prisma.ProjectApplicationWhereInput[];
    OR?: Prisma.ProjectApplicationWhereInput[];
    NOT?: Prisma.ProjectApplicationWhereInput | Prisma.ProjectApplicationWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectApplication"> | string;
    applicantId?: Prisma.StringFilter<"ProjectApplication"> | string;
    status?: Prisma.EnumApplicationStatusFilter<"ProjectApplication"> | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFilter<"ProjectApplication"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id" | "projectId_applicantId">;
export type ProjectApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    _count?: Prisma.ProjectApplicationCountOrderByAggregateInput;
    _max?: Prisma.ProjectApplicationMaxOrderByAggregateInput;
    _min?: Prisma.ProjectApplicationMinOrderByAggregateInput;
};
export type ProjectApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectApplicationScalarWhereWithAggregatesInput | Prisma.ProjectApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectApplicationScalarWhereWithAggregatesInput | Prisma.ProjectApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProjectApplication"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectApplication"> | string;
    applicantId?: Prisma.StringWithAggregatesFilter<"ProjectApplication"> | string;
    status?: Prisma.EnumApplicationStatusWithAggregatesFilter<"ProjectApplication"> | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeWithAggregatesFilter<"ProjectApplication"> | Date | string;
};
export type ProjectApplicationCreateInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutApplicationsInput;
};
export type ProjectApplicationUncheckedCreateInput = {
    id?: string;
    projectId: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
};
export type ProjectApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutApplicationsNestedInput;
};
export type ProjectApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationCreateManyInput = {
    id?: string;
    projectId: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
};
export type ProjectApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationListRelationFilter = {
    every?: Prisma.ProjectApplicationWhereInput;
    some?: Prisma.ProjectApplicationWhereInput;
    none?: Prisma.ProjectApplicationWhereInput;
};
export type ProjectApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectApplicationProjectIdApplicantIdCompoundUniqueInput = {
    projectId: string;
    applicantId: string;
};
export type ProjectApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ProjectApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ProjectApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ProjectApplicationCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput> | Prisma.ProjectApplicationCreateWithoutProjectInput[] | Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput | Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectApplicationCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
};
export type ProjectApplicationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput> | Prisma.ProjectApplicationCreateWithoutProjectInput[] | Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput | Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectApplicationCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
};
export type ProjectApplicationUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput> | Prisma.ProjectApplicationCreateWithoutProjectInput[] | Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput | Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectApplicationUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectApplicationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectApplicationCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    disconnect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    delete?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    connect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    update?: Prisma.ProjectApplicationUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectApplicationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectApplicationUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectApplicationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectApplicationScalarWhereInput | Prisma.ProjectApplicationScalarWhereInput[];
};
export type ProjectApplicationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput> | Prisma.ProjectApplicationCreateWithoutProjectInput[] | Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput | Prisma.ProjectApplicationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectApplicationUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectApplicationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectApplicationCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    disconnect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    delete?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    connect?: Prisma.ProjectApplicationWhereUniqueInput | Prisma.ProjectApplicationWhereUniqueInput[];
    update?: Prisma.ProjectApplicationUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectApplicationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectApplicationUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectApplicationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectApplicationScalarWhereInput | Prisma.ProjectApplicationScalarWhereInput[];
};
export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
};
export type ProjectApplicationCreateWithoutProjectInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
};
export type ProjectApplicationUncheckedCreateWithoutProjectInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
};
export type ProjectApplicationCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput>;
};
export type ProjectApplicationCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectApplicationCreateManyProjectInput | Prisma.ProjectApplicationCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectApplicationUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectApplicationUpdateWithoutProjectInput, Prisma.ProjectApplicationUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectApplicationCreateWithoutProjectInput, Prisma.ProjectApplicationUncheckedCreateWithoutProjectInput>;
};
export type ProjectApplicationUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectApplicationUpdateWithoutProjectInput, Prisma.ProjectApplicationUncheckedUpdateWithoutProjectInput>;
};
export type ProjectApplicationUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectApplicationUpdateManyMutationInput, Prisma.ProjectApplicationUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectApplicationScalarWhereInput = {
    AND?: Prisma.ProjectApplicationScalarWhereInput | Prisma.ProjectApplicationScalarWhereInput[];
    OR?: Prisma.ProjectApplicationScalarWhereInput[];
    NOT?: Prisma.ProjectApplicationScalarWhereInput | Prisma.ProjectApplicationScalarWhereInput[];
    id?: Prisma.StringFilter<"ProjectApplication"> | string;
    projectId?: Prisma.StringFilter<"ProjectApplication"> | string;
    applicantId?: Prisma.StringFilter<"ProjectApplication"> | string;
    status?: Prisma.EnumApplicationStatusFilter<"ProjectApplication"> | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFilter<"ProjectApplication"> | Date | string;
};
export type ProjectApplicationCreateManyProjectInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
};
export type ProjectApplicationUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    applicantId?: boolean;
    status?: boolean;
    appliedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectApplication"]>;
export type ProjectApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    applicantId?: boolean;
    status?: boolean;
    appliedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectApplication"]>;
export type ProjectApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    applicantId?: boolean;
    status?: boolean;
    appliedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectApplication"]>;
export type ProjectApplicationSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    applicantId?: boolean;
    status?: boolean;
    appliedAt?: boolean;
};
export type ProjectApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "applicantId" | "status" | "appliedAt", ExtArgs["result"]["projectApplication"]>;
export type ProjectApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $ProjectApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectApplication";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        applicantId: string;
        status: $Enums.ApplicationStatus;
        appliedAt: Date;
    }, ExtArgs["result"]["projectApplication"]>;
    composites: {};
};
export type ProjectApplicationGetPayload<S extends boolean | null | undefined | ProjectApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload, S>;
export type ProjectApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectApplicationCountAggregateInputType | true;
};
export interface ProjectApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectApplication'];
        meta: {
            name: 'ProjectApplication';
        };
    };
    findUnique<T extends ProjectApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectApplicationCreateArgs>(args: Prisma.SelectSubset<T, ProjectApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectApplicationDeleteArgs>(args: Prisma.SelectSubset<T, ProjectApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectApplicationUpdateArgs>(args: Prisma.SelectSubset<T, ProjectApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectApplicationUpsertArgs>(args: Prisma.SelectSubset<T, ProjectApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectApplicationClient<runtime.Types.Result.GetResult<Prisma.$ProjectApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectApplicationCountArgs>(args?: Prisma.Subset<T, ProjectApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectApplicationCountAggregateOutputType> : number>;
    aggregate<T extends ProjectApplicationAggregateArgs>(args: Prisma.Subset<T, ProjectApplicationAggregateArgs>): Prisma.PrismaPromise<GetProjectApplicationAggregateType<T>>;
    groupBy<T extends ProjectApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectApplicationFieldRefs;
}
export interface Prisma__ProjectApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"ProjectApplication", 'String'>;
    readonly projectId: Prisma.FieldRef<"ProjectApplication", 'String'>;
    readonly applicantId: Prisma.FieldRef<"ProjectApplication", 'String'>;
    readonly status: Prisma.FieldRef<"ProjectApplication", 'ApplicationStatus'>;
    readonly appliedAt: Prisma.FieldRef<"ProjectApplication", 'DateTime'>;
}
export type ProjectApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where: Prisma.ProjectApplicationWhereUniqueInput;
};
export type ProjectApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where: Prisma.ProjectApplicationWhereUniqueInput;
};
export type ProjectApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where?: Prisma.ProjectApplicationWhereInput;
    orderBy?: Prisma.ProjectApplicationOrderByWithRelationInput | Prisma.ProjectApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectApplicationScalarFieldEnum | Prisma.ProjectApplicationScalarFieldEnum[];
};
export type ProjectApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where?: Prisma.ProjectApplicationWhereInput;
    orderBy?: Prisma.ProjectApplicationOrderByWithRelationInput | Prisma.ProjectApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectApplicationScalarFieldEnum | Prisma.ProjectApplicationScalarFieldEnum[];
};
export type ProjectApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where?: Prisma.ProjectApplicationWhereInput;
    orderBy?: Prisma.ProjectApplicationOrderByWithRelationInput | Prisma.ProjectApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectApplicationScalarFieldEnum | Prisma.ProjectApplicationScalarFieldEnum[];
};
export type ProjectApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectApplicationCreateInput, Prisma.ProjectApplicationUncheckedCreateInput>;
};
export type ProjectApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectApplicationCreateManyInput | Prisma.ProjectApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    data: Prisma.ProjectApplicationCreateManyInput | Prisma.ProjectApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectApplicationUpdateInput, Prisma.ProjectApplicationUncheckedUpdateInput>;
    where: Prisma.ProjectApplicationWhereUniqueInput;
};
export type ProjectApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectApplicationUpdateManyMutationInput, Prisma.ProjectApplicationUncheckedUpdateManyInput>;
    where?: Prisma.ProjectApplicationWhereInput;
    limit?: number;
};
export type ProjectApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectApplicationUpdateManyMutationInput, Prisma.ProjectApplicationUncheckedUpdateManyInput>;
    where?: Prisma.ProjectApplicationWhereInput;
    limit?: number;
    include?: Prisma.ProjectApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where: Prisma.ProjectApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectApplicationCreateInput, Prisma.ProjectApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectApplicationUpdateInput, Prisma.ProjectApplicationUncheckedUpdateInput>;
};
export type ProjectApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
    where: Prisma.ProjectApplicationWhereUniqueInput;
};
export type ProjectApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectApplicationWhereInput;
    limit?: number;
};
export type ProjectApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectApplicationOmit<ExtArgs> | null;
    include?: Prisma.ProjectApplicationInclude<ExtArgs> | null;
};
