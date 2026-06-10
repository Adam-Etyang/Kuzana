import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WaitlistModel = runtime.Types.Result.DefaultSelection<Prisma.$WaitlistPayload>;
export type AggregateWaitlist = {
    _count: WaitlistCountAggregateOutputType | null;
    _min: WaitlistMinAggregateOutputType | null;
    _max: WaitlistMaxAggregateOutputType | null;
};
export type WaitlistMinAggregateOutputType = {
    id: string | null;
    menteeId: string | null;
    joinedAt: Date | null;
};
export type WaitlistMaxAggregateOutputType = {
    id: string | null;
    menteeId: string | null;
    joinedAt: Date | null;
};
export type WaitlistCountAggregateOutputType = {
    id: number;
    menteeId: number;
    joinedAt: number;
    _all: number;
};
export type WaitlistMinAggregateInputType = {
    id?: true;
    menteeId?: true;
    joinedAt?: true;
};
export type WaitlistMaxAggregateInputType = {
    id?: true;
    menteeId?: true;
    joinedAt?: true;
};
export type WaitlistCountAggregateInputType = {
    id?: true;
    menteeId?: true;
    joinedAt?: true;
    _all?: true;
};
export type WaitlistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WaitlistWhereInput;
    orderBy?: Prisma.WaitlistOrderByWithRelationInput | Prisma.WaitlistOrderByWithRelationInput[];
    cursor?: Prisma.WaitlistWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WaitlistCountAggregateInputType;
    _min?: WaitlistMinAggregateInputType;
    _max?: WaitlistMaxAggregateInputType;
};
export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
    [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWaitlist[P]> : Prisma.GetScalarType<T[P], AggregateWaitlist[P]>;
};
export type WaitlistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WaitlistWhereInput;
    orderBy?: Prisma.WaitlistOrderByWithAggregationInput | Prisma.WaitlistOrderByWithAggregationInput[];
    by: Prisma.WaitlistScalarFieldEnum[] | Prisma.WaitlistScalarFieldEnum;
    having?: Prisma.WaitlistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WaitlistCountAggregateInputType | true;
    _min?: WaitlistMinAggregateInputType;
    _max?: WaitlistMaxAggregateInputType;
};
export type WaitlistGroupByOutputType = {
    id: string;
    menteeId: string;
    joinedAt: Date;
    _count: WaitlistCountAggregateOutputType | null;
    _min: WaitlistMinAggregateOutputType | null;
    _max: WaitlistMaxAggregateOutputType | null;
};
export type GetWaitlistGroupByPayload<T extends WaitlistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WaitlistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WaitlistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WaitlistGroupByOutputType[P]>;
}>>;
export type WaitlistWhereInput = {
    AND?: Prisma.WaitlistWhereInput | Prisma.WaitlistWhereInput[];
    OR?: Prisma.WaitlistWhereInput[];
    NOT?: Prisma.WaitlistWhereInput | Prisma.WaitlistWhereInput[];
    id?: Prisma.StringFilter<"Waitlist"> | string;
    menteeId?: Prisma.StringFilter<"Waitlist"> | string;
    joinedAt?: Prisma.DateTimeFilter<"Waitlist"> | Date | string;
};
export type WaitlistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type WaitlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    menteeId?: string;
    AND?: Prisma.WaitlistWhereInput | Prisma.WaitlistWhereInput[];
    OR?: Prisma.WaitlistWhereInput[];
    NOT?: Prisma.WaitlistWhereInput | Prisma.WaitlistWhereInput[];
    joinedAt?: Prisma.DateTimeFilter<"Waitlist"> | Date | string;
}, "id" | "menteeId">;
export type WaitlistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    _count?: Prisma.WaitlistCountOrderByAggregateInput;
    _max?: Prisma.WaitlistMaxOrderByAggregateInput;
    _min?: Prisma.WaitlistMinOrderByAggregateInput;
};
export type WaitlistScalarWhereWithAggregatesInput = {
    AND?: Prisma.WaitlistScalarWhereWithAggregatesInput | Prisma.WaitlistScalarWhereWithAggregatesInput[];
    OR?: Prisma.WaitlistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WaitlistScalarWhereWithAggregatesInput | Prisma.WaitlistScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Waitlist"> | string;
    menteeId?: Prisma.StringWithAggregatesFilter<"Waitlist"> | string;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"Waitlist"> | Date | string;
};
export type WaitlistCreateInput = {
    id?: string;
    menteeId: string;
    joinedAt?: Date | string;
};
export type WaitlistUncheckedCreateInput = {
    id?: string;
    menteeId: string;
    joinedAt?: Date | string;
};
export type WaitlistUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaitlistUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaitlistCreateManyInput = {
    id?: string;
    menteeId: string;
    joinedAt?: Date | string;
};
export type WaitlistUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaitlistUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaitlistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type WaitlistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type WaitlistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type WaitlistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    joinedAt?: boolean;
}, ExtArgs["result"]["waitlist"]>;
export type WaitlistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    joinedAt?: boolean;
}, ExtArgs["result"]["waitlist"]>;
export type WaitlistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    joinedAt?: boolean;
}, ExtArgs["result"]["waitlist"]>;
export type WaitlistSelectScalar = {
    id?: boolean;
    menteeId?: boolean;
    joinedAt?: boolean;
};
export type WaitlistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "menteeId" | "joinedAt", ExtArgs["result"]["waitlist"]>;
export type $WaitlistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Waitlist";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        menteeId: string;
        joinedAt: Date;
    }, ExtArgs["result"]["waitlist"]>;
    composites: {};
};
export type WaitlistGetPayload<S extends boolean | null | undefined | WaitlistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WaitlistPayload, S>;
export type WaitlistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WaitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WaitlistCountAggregateInputType | true;
};
export interface WaitlistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Waitlist'];
        meta: {
            name: 'Waitlist';
        };
    };
    findUnique<T extends WaitlistFindUniqueArgs>(args: Prisma.SelectSubset<T, WaitlistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WaitlistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WaitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WaitlistFindFirstArgs>(args?: Prisma.SelectSubset<T, WaitlistFindFirstArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WaitlistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WaitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WaitlistFindManyArgs>(args?: Prisma.SelectSubset<T, WaitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WaitlistCreateArgs>(args: Prisma.SelectSubset<T, WaitlistCreateArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WaitlistCreateManyArgs>(args?: Prisma.SelectSubset<T, WaitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WaitlistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WaitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WaitlistDeleteArgs>(args: Prisma.SelectSubset<T, WaitlistDeleteArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WaitlistUpdateArgs>(args: Prisma.SelectSubset<T, WaitlistUpdateArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WaitlistDeleteManyArgs>(args?: Prisma.SelectSubset<T, WaitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WaitlistUpdateManyArgs>(args: Prisma.SelectSubset<T, WaitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WaitlistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WaitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WaitlistUpsertArgs>(args: Prisma.SelectSubset<T, WaitlistUpsertArgs<ExtArgs>>): Prisma.Prisma__WaitlistClient<runtime.Types.Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WaitlistCountArgs>(args?: Prisma.Subset<T, WaitlistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WaitlistCountAggregateOutputType> : number>;
    aggregate<T extends WaitlistAggregateArgs>(args: Prisma.Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>;
    groupBy<T extends WaitlistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WaitlistGroupByArgs['orderBy'];
    } : {
        orderBy?: WaitlistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WaitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WaitlistFieldRefs;
}
export interface Prisma__WaitlistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WaitlistFieldRefs {
    readonly id: Prisma.FieldRef<"Waitlist", 'String'>;
    readonly menteeId: Prisma.FieldRef<"Waitlist", 'String'>;
    readonly joinedAt: Prisma.FieldRef<"Waitlist", 'DateTime'>;
}
export type WaitlistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where: Prisma.WaitlistWhereUniqueInput;
};
export type WaitlistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where: Prisma.WaitlistWhereUniqueInput;
};
export type WaitlistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where?: Prisma.WaitlistWhereInput;
    orderBy?: Prisma.WaitlistOrderByWithRelationInput | Prisma.WaitlistOrderByWithRelationInput[];
    cursor?: Prisma.WaitlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WaitlistScalarFieldEnum | Prisma.WaitlistScalarFieldEnum[];
};
export type WaitlistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where?: Prisma.WaitlistWhereInput;
    orderBy?: Prisma.WaitlistOrderByWithRelationInput | Prisma.WaitlistOrderByWithRelationInput[];
    cursor?: Prisma.WaitlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WaitlistScalarFieldEnum | Prisma.WaitlistScalarFieldEnum[];
};
export type WaitlistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where?: Prisma.WaitlistWhereInput;
    orderBy?: Prisma.WaitlistOrderByWithRelationInput | Prisma.WaitlistOrderByWithRelationInput[];
    cursor?: Prisma.WaitlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WaitlistScalarFieldEnum | Prisma.WaitlistScalarFieldEnum[];
};
export type WaitlistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WaitlistCreateInput, Prisma.WaitlistUncheckedCreateInput>;
};
export type WaitlistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WaitlistCreateManyInput | Prisma.WaitlistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WaitlistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    data: Prisma.WaitlistCreateManyInput | Prisma.WaitlistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WaitlistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WaitlistUpdateInput, Prisma.WaitlistUncheckedUpdateInput>;
    where: Prisma.WaitlistWhereUniqueInput;
};
export type WaitlistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WaitlistUpdateManyMutationInput, Prisma.WaitlistUncheckedUpdateManyInput>;
    where?: Prisma.WaitlistWhereInput;
    limit?: number;
};
export type WaitlistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WaitlistUpdateManyMutationInput, Prisma.WaitlistUncheckedUpdateManyInput>;
    where?: Prisma.WaitlistWhereInput;
    limit?: number;
};
export type WaitlistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where: Prisma.WaitlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.WaitlistCreateInput, Prisma.WaitlistUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WaitlistUpdateInput, Prisma.WaitlistUncheckedUpdateInput>;
};
export type WaitlistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
    where: Prisma.WaitlistWhereUniqueInput;
};
export type WaitlistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WaitlistWhereInput;
    limit?: number;
};
export type WaitlistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WaitlistSelect<ExtArgs> | null;
    omit?: Prisma.WaitlistOmit<ExtArgs> | null;
};
