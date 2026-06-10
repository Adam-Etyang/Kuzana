import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SchedulerRunModel = runtime.Types.Result.DefaultSelection<Prisma.$SchedulerRunPayload>;
export type AggregateSchedulerRun = {
    _count: SchedulerRunCountAggregateOutputType | null;
    _avg: SchedulerRunAvgAggregateOutputType | null;
    _sum: SchedulerRunSumAggregateOutputType | null;
    _min: SchedulerRunMinAggregateOutputType | null;
    _max: SchedulerRunMaxAggregateOutputType | null;
};
export type SchedulerRunAvgAggregateOutputType = {
    matchesCreated: number | null;
    waitlistedCount: number | null;
};
export type SchedulerRunSumAggregateOutputType = {
    matchesCreated: number | null;
    waitlistedCount: number | null;
};
export type SchedulerRunMinAggregateOutputType = {
    id: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    matchesCreated: number | null;
    waitlistedCount: number | null;
    status: $Enums.RunStatus | null;
    error: string | null;
};
export type SchedulerRunMaxAggregateOutputType = {
    id: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    matchesCreated: number | null;
    waitlistedCount: number | null;
    status: $Enums.RunStatus | null;
    error: string | null;
};
export type SchedulerRunCountAggregateOutputType = {
    id: number;
    startedAt: number;
    completedAt: number;
    matchesCreated: number;
    waitlistedCount: number;
    status: number;
    error: number;
    _all: number;
};
export type SchedulerRunAvgAggregateInputType = {
    matchesCreated?: true;
    waitlistedCount?: true;
};
export type SchedulerRunSumAggregateInputType = {
    matchesCreated?: true;
    waitlistedCount?: true;
};
export type SchedulerRunMinAggregateInputType = {
    id?: true;
    startedAt?: true;
    completedAt?: true;
    matchesCreated?: true;
    waitlistedCount?: true;
    status?: true;
    error?: true;
};
export type SchedulerRunMaxAggregateInputType = {
    id?: true;
    startedAt?: true;
    completedAt?: true;
    matchesCreated?: true;
    waitlistedCount?: true;
    status?: true;
    error?: true;
};
export type SchedulerRunCountAggregateInputType = {
    id?: true;
    startedAt?: true;
    completedAt?: true;
    matchesCreated?: true;
    waitlistedCount?: true;
    status?: true;
    error?: true;
    _all?: true;
};
export type SchedulerRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchedulerRunWhereInput;
    orderBy?: Prisma.SchedulerRunOrderByWithRelationInput | Prisma.SchedulerRunOrderByWithRelationInput[];
    cursor?: Prisma.SchedulerRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SchedulerRunCountAggregateInputType;
    _avg?: SchedulerRunAvgAggregateInputType;
    _sum?: SchedulerRunSumAggregateInputType;
    _min?: SchedulerRunMinAggregateInputType;
    _max?: SchedulerRunMaxAggregateInputType;
};
export type GetSchedulerRunAggregateType<T extends SchedulerRunAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedulerRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedulerRun[P]> : Prisma.GetScalarType<T[P], AggregateSchedulerRun[P]>;
};
export type SchedulerRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchedulerRunWhereInput;
    orderBy?: Prisma.SchedulerRunOrderByWithAggregationInput | Prisma.SchedulerRunOrderByWithAggregationInput[];
    by: Prisma.SchedulerRunScalarFieldEnum[] | Prisma.SchedulerRunScalarFieldEnum;
    having?: Prisma.SchedulerRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchedulerRunCountAggregateInputType | true;
    _avg?: SchedulerRunAvgAggregateInputType;
    _sum?: SchedulerRunSumAggregateInputType;
    _min?: SchedulerRunMinAggregateInputType;
    _max?: SchedulerRunMaxAggregateInputType;
};
export type SchedulerRunGroupByOutputType = {
    id: string;
    startedAt: Date;
    completedAt: Date | null;
    matchesCreated: number;
    waitlistedCount: number;
    status: $Enums.RunStatus;
    error: string | null;
    _count: SchedulerRunCountAggregateOutputType | null;
    _avg: SchedulerRunAvgAggregateOutputType | null;
    _sum: SchedulerRunSumAggregateOutputType | null;
    _min: SchedulerRunMinAggregateOutputType | null;
    _max: SchedulerRunMaxAggregateOutputType | null;
};
export type GetSchedulerRunGroupByPayload<T extends SchedulerRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchedulerRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchedulerRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchedulerRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchedulerRunGroupByOutputType[P]>;
}>>;
export type SchedulerRunWhereInput = {
    AND?: Prisma.SchedulerRunWhereInput | Prisma.SchedulerRunWhereInput[];
    OR?: Prisma.SchedulerRunWhereInput[];
    NOT?: Prisma.SchedulerRunWhereInput | Prisma.SchedulerRunWhereInput[];
    id?: Prisma.StringFilter<"SchedulerRun"> | string;
    startedAt?: Prisma.DateTimeFilter<"SchedulerRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"SchedulerRun"> | Date | string | null;
    matchesCreated?: Prisma.IntFilter<"SchedulerRun"> | number;
    waitlistedCount?: Prisma.IntFilter<"SchedulerRun"> | number;
    status?: Prisma.EnumRunStatusFilter<"SchedulerRun"> | $Enums.RunStatus;
    error?: Prisma.StringNullableFilter<"SchedulerRun"> | string | null;
};
export type SchedulerRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type SchedulerRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SchedulerRunWhereInput | Prisma.SchedulerRunWhereInput[];
    OR?: Prisma.SchedulerRunWhereInput[];
    NOT?: Prisma.SchedulerRunWhereInput | Prisma.SchedulerRunWhereInput[];
    startedAt?: Prisma.DateTimeFilter<"SchedulerRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"SchedulerRun"> | Date | string | null;
    matchesCreated?: Prisma.IntFilter<"SchedulerRun"> | number;
    waitlistedCount?: Prisma.IntFilter<"SchedulerRun"> | number;
    status?: Prisma.EnumRunStatusFilter<"SchedulerRun"> | $Enums.RunStatus;
    error?: Prisma.StringNullableFilter<"SchedulerRun"> | string | null;
}, "id">;
export type SchedulerRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SchedulerRunCountOrderByAggregateInput;
    _avg?: Prisma.SchedulerRunAvgOrderByAggregateInput;
    _max?: Prisma.SchedulerRunMaxOrderByAggregateInput;
    _min?: Prisma.SchedulerRunMinOrderByAggregateInput;
    _sum?: Prisma.SchedulerRunSumOrderByAggregateInput;
};
export type SchedulerRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchedulerRunScalarWhereWithAggregatesInput | Prisma.SchedulerRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchedulerRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchedulerRunScalarWhereWithAggregatesInput | Prisma.SchedulerRunScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SchedulerRun"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"SchedulerRun"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SchedulerRun"> | Date | string | null;
    matchesCreated?: Prisma.IntWithAggregatesFilter<"SchedulerRun"> | number;
    waitlistedCount?: Prisma.IntWithAggregatesFilter<"SchedulerRun"> | number;
    status?: Prisma.EnumRunStatusWithAggregatesFilter<"SchedulerRun"> | $Enums.RunStatus;
    error?: Prisma.StringNullableWithAggregatesFilter<"SchedulerRun"> | string | null;
};
export type SchedulerRunCreateInput = {
    id?: string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    matchesCreated?: number;
    waitlistedCount?: number;
    status?: $Enums.RunStatus;
    error?: string | null;
};
export type SchedulerRunUncheckedCreateInput = {
    id?: string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    matchesCreated?: number;
    waitlistedCount?: number;
    status?: $Enums.RunStatus;
    error?: string | null;
};
export type SchedulerRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    matchesCreated?: Prisma.IntFieldUpdateOperationsInput | number;
    waitlistedCount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SchedulerRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    matchesCreated?: Prisma.IntFieldUpdateOperationsInput | number;
    waitlistedCount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SchedulerRunCreateManyInput = {
    id?: string;
    startedAt: Date | string;
    completedAt?: Date | string | null;
    matchesCreated?: number;
    waitlistedCount?: number;
    status?: $Enums.RunStatus;
    error?: string | null;
};
export type SchedulerRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    matchesCreated?: Prisma.IntFieldUpdateOperationsInput | number;
    waitlistedCount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SchedulerRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    matchesCreated?: Prisma.IntFieldUpdateOperationsInput | number;
    waitlistedCount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SchedulerRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
};
export type SchedulerRunAvgOrderByAggregateInput = {
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
};
export type SchedulerRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
};
export type SchedulerRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
};
export type SchedulerRunSumOrderByAggregateInput = {
    matchesCreated?: Prisma.SortOrder;
    waitlistedCount?: Prisma.SortOrder;
};
export type EnumRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.RunStatus;
};
export type SchedulerRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    matchesCreated?: boolean;
    waitlistedCount?: boolean;
    status?: boolean;
    error?: boolean;
}, ExtArgs["result"]["schedulerRun"]>;
export type SchedulerRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    matchesCreated?: boolean;
    waitlistedCount?: boolean;
    status?: boolean;
    error?: boolean;
}, ExtArgs["result"]["schedulerRun"]>;
export type SchedulerRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    matchesCreated?: boolean;
    waitlistedCount?: boolean;
    status?: boolean;
    error?: boolean;
}, ExtArgs["result"]["schedulerRun"]>;
export type SchedulerRunSelectScalar = {
    id?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    matchesCreated?: boolean;
    waitlistedCount?: boolean;
    status?: boolean;
    error?: boolean;
};
export type SchedulerRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "startedAt" | "completedAt" | "matchesCreated" | "waitlistedCount" | "status" | "error", ExtArgs["result"]["schedulerRun"]>;
export type $SchedulerRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SchedulerRun";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        startedAt: Date;
        completedAt: Date | null;
        matchesCreated: number;
        waitlistedCount: number;
        status: $Enums.RunStatus;
        error: string | null;
    }, ExtArgs["result"]["schedulerRun"]>;
    composites: {};
};
export type SchedulerRunGetPayload<S extends boolean | null | undefined | SchedulerRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload, S>;
export type SchedulerRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchedulerRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchedulerRunCountAggregateInputType | true;
};
export interface SchedulerRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SchedulerRun'];
        meta: {
            name: 'SchedulerRun';
        };
    };
    findUnique<T extends SchedulerRunFindUniqueArgs>(args: Prisma.SelectSubset<T, SchedulerRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SchedulerRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchedulerRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SchedulerRunFindFirstArgs>(args?: Prisma.SelectSubset<T, SchedulerRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SchedulerRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchedulerRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SchedulerRunFindManyArgs>(args?: Prisma.SelectSubset<T, SchedulerRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SchedulerRunCreateArgs>(args: Prisma.SelectSubset<T, SchedulerRunCreateArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SchedulerRunCreateManyArgs>(args?: Prisma.SelectSubset<T, SchedulerRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SchedulerRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchedulerRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SchedulerRunDeleteArgs>(args: Prisma.SelectSubset<T, SchedulerRunDeleteArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SchedulerRunUpdateArgs>(args: Prisma.SelectSubset<T, SchedulerRunUpdateArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SchedulerRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchedulerRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SchedulerRunUpdateManyArgs>(args: Prisma.SelectSubset<T, SchedulerRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SchedulerRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchedulerRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SchedulerRunUpsertArgs>(args: Prisma.SelectSubset<T, SchedulerRunUpsertArgs<ExtArgs>>): Prisma.Prisma__SchedulerRunClient<runtime.Types.Result.GetResult<Prisma.$SchedulerRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SchedulerRunCountArgs>(args?: Prisma.Subset<T, SchedulerRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchedulerRunCountAggregateOutputType> : number>;
    aggregate<T extends SchedulerRunAggregateArgs>(args: Prisma.Subset<T, SchedulerRunAggregateArgs>): Prisma.PrismaPromise<GetSchedulerRunAggregateType<T>>;
    groupBy<T extends SchedulerRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchedulerRunGroupByArgs['orderBy'];
    } : {
        orderBy?: SchedulerRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchedulerRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulerRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SchedulerRunFieldRefs;
}
export interface Prisma__SchedulerRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SchedulerRunFieldRefs {
    readonly id: Prisma.FieldRef<"SchedulerRun", 'String'>;
    readonly startedAt: Prisma.FieldRef<"SchedulerRun", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"SchedulerRun", 'DateTime'>;
    readonly matchesCreated: Prisma.FieldRef<"SchedulerRun", 'Int'>;
    readonly waitlistedCount: Prisma.FieldRef<"SchedulerRun", 'Int'>;
    readonly status: Prisma.FieldRef<"SchedulerRun", 'RunStatus'>;
    readonly error: Prisma.FieldRef<"SchedulerRun", 'String'>;
}
export type SchedulerRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where: Prisma.SchedulerRunWhereUniqueInput;
};
export type SchedulerRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where: Prisma.SchedulerRunWhereUniqueInput;
};
export type SchedulerRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where?: Prisma.SchedulerRunWhereInput;
    orderBy?: Prisma.SchedulerRunOrderByWithRelationInput | Prisma.SchedulerRunOrderByWithRelationInput[];
    cursor?: Prisma.SchedulerRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchedulerRunScalarFieldEnum | Prisma.SchedulerRunScalarFieldEnum[];
};
export type SchedulerRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where?: Prisma.SchedulerRunWhereInput;
    orderBy?: Prisma.SchedulerRunOrderByWithRelationInput | Prisma.SchedulerRunOrderByWithRelationInput[];
    cursor?: Prisma.SchedulerRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchedulerRunScalarFieldEnum | Prisma.SchedulerRunScalarFieldEnum[];
};
export type SchedulerRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where?: Prisma.SchedulerRunWhereInput;
    orderBy?: Prisma.SchedulerRunOrderByWithRelationInput | Prisma.SchedulerRunOrderByWithRelationInput[];
    cursor?: Prisma.SchedulerRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchedulerRunScalarFieldEnum | Prisma.SchedulerRunScalarFieldEnum[];
};
export type SchedulerRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchedulerRunCreateInput, Prisma.SchedulerRunUncheckedCreateInput>;
};
export type SchedulerRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SchedulerRunCreateManyInput | Prisma.SchedulerRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchedulerRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    data: Prisma.SchedulerRunCreateManyInput | Prisma.SchedulerRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchedulerRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchedulerRunUpdateInput, Prisma.SchedulerRunUncheckedUpdateInput>;
    where: Prisma.SchedulerRunWhereUniqueInput;
};
export type SchedulerRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SchedulerRunUpdateManyMutationInput, Prisma.SchedulerRunUncheckedUpdateManyInput>;
    where?: Prisma.SchedulerRunWhereInput;
    limit?: number;
};
export type SchedulerRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchedulerRunUpdateManyMutationInput, Prisma.SchedulerRunUncheckedUpdateManyInput>;
    where?: Prisma.SchedulerRunWhereInput;
    limit?: number;
};
export type SchedulerRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where: Prisma.SchedulerRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchedulerRunCreateInput, Prisma.SchedulerRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SchedulerRunUpdateInput, Prisma.SchedulerRunUncheckedUpdateInput>;
};
export type SchedulerRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
    where: Prisma.SchedulerRunWhereUniqueInput;
};
export type SchedulerRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchedulerRunWhereInput;
    limit?: number;
};
export type SchedulerRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchedulerRunSelect<ExtArgs> | null;
    omit?: Prisma.SchedulerRunOmit<ExtArgs> | null;
};
