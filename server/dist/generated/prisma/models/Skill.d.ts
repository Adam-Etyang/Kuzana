import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SkillModel = runtime.Types.Result.DefaultSelection<Prisma.$SkillPayload>;
export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
};
export type SkillMinAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type SkillMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type SkillCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type SkillMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type SkillMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type SkillCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type SkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SkillCountAggregateInputType;
    _min?: SkillMinAggregateInputType;
    _max?: SkillMaxAggregateInputType;
};
export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
    [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSkill[P]> : Prisma.GetScalarType<T[P], AggregateSkill[P]>;
};
export type SkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithAggregationInput | Prisma.SkillOrderByWithAggregationInput[];
    by: Prisma.SkillScalarFieldEnum[] | Prisma.SkillScalarFieldEnum;
    having?: Prisma.SkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SkillCountAggregateInputType | true;
    _min?: SkillMinAggregateInputType;
    _max?: SkillMaxAggregateInputType;
};
export type SkillGroupByOutputType = {
    id: string;
    name: string;
    _count: SkillCountAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
};
export type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SkillGroupByOutputType[P]>;
}>>;
export type SkillWhereInput = {
    AND?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    OR?: Prisma.SkillWhereInput[];
    NOT?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    id?: Prisma.StringFilter<"Skill"> | string;
    name?: Prisma.StringFilter<"Skill"> | string;
    profiles?: Prisma.ProfileSkillListRelationFilter;
    projects?: Prisma.ProjectSkillListRelationFilter;
};
export type SkillOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    profiles?: Prisma.ProfileSkillOrderByRelationAggregateInput;
    projects?: Prisma.ProjectSkillOrderByRelationAggregateInput;
};
export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    OR?: Prisma.SkillWhereInput[];
    NOT?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    profiles?: Prisma.ProfileSkillListRelationFilter;
    projects?: Prisma.ProjectSkillListRelationFilter;
}, "id" | "name">;
export type SkillOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.SkillCountOrderByAggregateInput;
    _max?: Prisma.SkillMaxOrderByAggregateInput;
    _min?: Prisma.SkillMinOrderByAggregateInput;
};
export type SkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.SkillScalarWhereWithAggregatesInput | Prisma.SkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.SkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SkillScalarWhereWithAggregatesInput | Prisma.SkillScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
};
export type SkillCreateInput = {
    id?: string;
    name: string;
    profiles?: Prisma.ProfileSkillCreateNestedManyWithoutSkillInput;
    projects?: Prisma.ProjectSkillCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateInput = {
    id?: string;
    name: string;
    profiles?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutSkillInput;
    projects?: Prisma.ProjectSkillUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles?: Prisma.ProfileSkillUpdateManyWithoutSkillNestedInput;
    projects?: Prisma.ProjectSkillUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles?: Prisma.ProfileSkillUncheckedUpdateManyWithoutSkillNestedInput;
    projects?: Prisma.ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateManyInput = {
    id?: string;
    name: string;
};
export type SkillUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SkillUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SkillCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SkillMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SkillMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SkillScalarRelationFilter = {
    is?: Prisma.SkillWhereInput;
    isNot?: Prisma.SkillWhereInput;
};
export type SkillCreateNestedOneWithoutProfilesInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutProfilesInput, Prisma.SkillUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutProfilesInput;
    connect?: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutProfilesInput, Prisma.SkillUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutProfilesInput;
    upsert?: Prisma.SkillUpsertWithoutProfilesInput;
    connect?: Prisma.SkillWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SkillUpdateToOneWithWhereWithoutProfilesInput, Prisma.SkillUpdateWithoutProfilesInput>, Prisma.SkillUncheckedUpdateWithoutProfilesInput>;
};
export type SkillCreateNestedOneWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutProjectsInput, Prisma.SkillUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutProjectsInput;
    connect?: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutProjectsInput, Prisma.SkillUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutProjectsInput;
    upsert?: Prisma.SkillUpsertWithoutProjectsInput;
    connect?: Prisma.SkillWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SkillUpdateToOneWithWhereWithoutProjectsInput, Prisma.SkillUpdateWithoutProjectsInput>, Prisma.SkillUncheckedUpdateWithoutProjectsInput>;
};
export type SkillCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    projects?: Prisma.ProjectSkillCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    projects?: Prisma.ProjectSkillUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutProfilesInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutProfilesInput, Prisma.SkillUncheckedCreateWithoutProfilesInput>;
};
export type SkillUpsertWithoutProfilesInput = {
    update: Prisma.XOR<Prisma.SkillUpdateWithoutProfilesInput, Prisma.SkillUncheckedUpdateWithoutProfilesInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutProfilesInput, Prisma.SkillUncheckedCreateWithoutProfilesInput>;
    where?: Prisma.SkillWhereInput;
};
export type SkillUpdateToOneWithWhereWithoutProfilesInput = {
    where?: Prisma.SkillWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutProfilesInput, Prisma.SkillUncheckedUpdateWithoutProfilesInput>;
};
export type SkillUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    projects?: Prisma.ProjectSkillUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    projects?: Prisma.ProjectSkillUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateWithoutProjectsInput = {
    id?: string;
    name: string;
    profiles?: Prisma.ProfileSkillCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutProjectsInput = {
    id?: string;
    name: string;
    profiles?: Prisma.ProfileSkillUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutProjectsInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutProjectsInput, Prisma.SkillUncheckedCreateWithoutProjectsInput>;
};
export type SkillUpsertWithoutProjectsInput = {
    update: Prisma.XOR<Prisma.SkillUpdateWithoutProjectsInput, Prisma.SkillUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutProjectsInput, Prisma.SkillUncheckedCreateWithoutProjectsInput>;
    where?: Prisma.SkillWhereInput;
};
export type SkillUpdateToOneWithWhereWithoutProjectsInput = {
    where?: Prisma.SkillWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutProjectsInput, Prisma.SkillUncheckedUpdateWithoutProjectsInput>;
};
export type SkillUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles?: Prisma.ProfileSkillUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles?: Prisma.ProfileSkillUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCountOutputType = {
    profiles: number;
    projects: number;
};
export type SkillCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | SkillCountOutputTypeCountProfilesArgs;
    projects?: boolean | SkillCountOutputTypeCountProjectsArgs;
};
export type SkillCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillCountOutputTypeSelect<ExtArgs> | null;
};
export type SkillCountOutputTypeCountProfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileSkillWhereInput;
};
export type SkillCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectSkillWhereInput;
};
export type SkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    profiles?: boolean | Prisma.Skill$profilesArgs<ExtArgs>;
    projects?: boolean | Prisma.Skill$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.SkillCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type SkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skill"]>;
export type SkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | Prisma.Skill$profilesArgs<ExtArgs>;
    projects?: boolean | Prisma.Skill$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.SkillCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Skill";
    objects: {
        profiles: Prisma.$ProfileSkillPayload<ExtArgs>[];
        projects: Prisma.$ProjectSkillPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
    }, ExtArgs["result"]["skill"]>;
    composites: {};
};
export type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SkillPayload, S>;
export type SkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SkillCountAggregateInputType | true;
};
export interface SkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Skill'];
        meta: {
            name: 'Skill';
        };
    };
    findUnique<T extends SkillFindUniqueArgs>(args: Prisma.SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SkillFindFirstArgs>(args?: Prisma.SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SkillFindManyArgs>(args?: Prisma.SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SkillCreateArgs>(args: Prisma.SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SkillCreateManyArgs>(args?: Prisma.SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SkillDeleteArgs>(args: Prisma.SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SkillUpdateArgs>(args: Prisma.SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SkillUpdateManyArgs>(args: Prisma.SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SkillUpsertArgs>(args: Prisma.SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SkillCountArgs>(args?: Prisma.Subset<T, SkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SkillCountAggregateOutputType> : number>;
    aggregate<T extends SkillAggregateArgs>(args: Prisma.Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>;
    groupBy<T extends SkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SkillGroupByArgs['orderBy'];
    } : {
        orderBy?: SkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SkillFieldRefs;
}
export interface Prisma__SkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profiles<T extends Prisma.Skill$profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Skill$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    projects<T extends Prisma.Skill$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Skill$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SkillFieldRefs {
    readonly id: Prisma.FieldRef<"Skill", 'String'>;
    readonly name: Prisma.FieldRef<"Skill", 'String'>;
}
export type SkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillScalarFieldEnum | Prisma.SkillScalarFieldEnum[];
};
export type SkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillScalarFieldEnum | Prisma.SkillScalarFieldEnum[];
};
export type SkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillScalarFieldEnum | Prisma.SkillScalarFieldEnum[];
};
export type SkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillCreateInput, Prisma.SkillUncheckedCreateInput>;
};
export type SkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SkillCreateManyInput | Prisma.SkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    data: Prisma.SkillCreateManyInput | Prisma.SkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillUpdateInput, Prisma.SkillUncheckedUpdateInput>;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SkillUpdateManyMutationInput, Prisma.SkillUncheckedUpdateManyInput>;
    where?: Prisma.SkillWhereInput;
    limit?: number;
};
export type SkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillUpdateManyMutationInput, Prisma.SkillUncheckedUpdateManyInput>;
    where?: Prisma.SkillWhereInput;
    limit?: number;
};
export type SkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateInput, Prisma.SkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SkillUpdateInput, Prisma.SkillUncheckedUpdateInput>;
};
export type SkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    limit?: number;
};
export type Skill$profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Skill$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
};
