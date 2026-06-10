import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompatibilityScoreModel = runtime.Types.Result.DefaultSelection<Prisma.$CompatibilityScorePayload>;
export type AggregateCompatibilityScore = {
    _count: CompatibilityScoreCountAggregateOutputType | null;
    _avg: CompatibilityScoreAvgAggregateOutputType | null;
    _sum: CompatibilityScoreSumAggregateOutputType | null;
    _min: CompatibilityScoreMinAggregateOutputType | null;
    _max: CompatibilityScoreMaxAggregateOutputType | null;
};
export type CompatibilityScoreAvgAggregateOutputType = {
    skillScore: number | null;
    interestScore: number | null;
    goalScore: number | null;
    fieldScore: number | null;
    availabilityScore: number | null;
    yearGapScore: number | null;
    totalScore: number | null;
};
export type CompatibilityScoreSumAggregateOutputType = {
    skillScore: number | null;
    interestScore: number | null;
    goalScore: number | null;
    fieldScore: number | null;
    availabilityScore: number | null;
    yearGapScore: number | null;
    totalScore: number | null;
};
export type CompatibilityScoreMinAggregateOutputType = {
    id: string | null;
    menteeId: string | null;
    mentorId: string | null;
    skillScore: number | null;
    interestScore: number | null;
    goalScore: number | null;
    fieldScore: number | null;
    availabilityScore: number | null;
    yearGapScore: number | null;
    totalScore: number | null;
    computedAt: Date | null;
};
export type CompatibilityScoreMaxAggregateOutputType = {
    id: string | null;
    menteeId: string | null;
    mentorId: string | null;
    skillScore: number | null;
    interestScore: number | null;
    goalScore: number | null;
    fieldScore: number | null;
    availabilityScore: number | null;
    yearGapScore: number | null;
    totalScore: number | null;
    computedAt: Date | null;
};
export type CompatibilityScoreCountAggregateOutputType = {
    id: number;
    menteeId: number;
    mentorId: number;
    skillScore: number;
    interestScore: number;
    goalScore: number;
    fieldScore: number;
    availabilityScore: number;
    yearGapScore: number;
    totalScore: number;
    computedAt: number;
    _all: number;
};
export type CompatibilityScoreAvgAggregateInputType = {
    skillScore?: true;
    interestScore?: true;
    goalScore?: true;
    fieldScore?: true;
    availabilityScore?: true;
    yearGapScore?: true;
    totalScore?: true;
};
export type CompatibilityScoreSumAggregateInputType = {
    skillScore?: true;
    interestScore?: true;
    goalScore?: true;
    fieldScore?: true;
    availabilityScore?: true;
    yearGapScore?: true;
    totalScore?: true;
};
export type CompatibilityScoreMinAggregateInputType = {
    id?: true;
    menteeId?: true;
    mentorId?: true;
    skillScore?: true;
    interestScore?: true;
    goalScore?: true;
    fieldScore?: true;
    availabilityScore?: true;
    yearGapScore?: true;
    totalScore?: true;
    computedAt?: true;
};
export type CompatibilityScoreMaxAggregateInputType = {
    id?: true;
    menteeId?: true;
    mentorId?: true;
    skillScore?: true;
    interestScore?: true;
    goalScore?: true;
    fieldScore?: true;
    availabilityScore?: true;
    yearGapScore?: true;
    totalScore?: true;
    computedAt?: true;
};
export type CompatibilityScoreCountAggregateInputType = {
    id?: true;
    menteeId?: true;
    mentorId?: true;
    skillScore?: true;
    interestScore?: true;
    goalScore?: true;
    fieldScore?: true;
    availabilityScore?: true;
    yearGapScore?: true;
    totalScore?: true;
    computedAt?: true;
    _all?: true;
};
export type CompatibilityScoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompatibilityScoreWhereInput;
    orderBy?: Prisma.CompatibilityScoreOrderByWithRelationInput | Prisma.CompatibilityScoreOrderByWithRelationInput[];
    cursor?: Prisma.CompatibilityScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompatibilityScoreCountAggregateInputType;
    _avg?: CompatibilityScoreAvgAggregateInputType;
    _sum?: CompatibilityScoreSumAggregateInputType;
    _min?: CompatibilityScoreMinAggregateInputType;
    _max?: CompatibilityScoreMaxAggregateInputType;
};
export type GetCompatibilityScoreAggregateType<T extends CompatibilityScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateCompatibilityScore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompatibilityScore[P]> : Prisma.GetScalarType<T[P], AggregateCompatibilityScore[P]>;
};
export type CompatibilityScoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompatibilityScoreWhereInput;
    orderBy?: Prisma.CompatibilityScoreOrderByWithAggregationInput | Prisma.CompatibilityScoreOrderByWithAggregationInput[];
    by: Prisma.CompatibilityScoreScalarFieldEnum[] | Prisma.CompatibilityScoreScalarFieldEnum;
    having?: Prisma.CompatibilityScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompatibilityScoreCountAggregateInputType | true;
    _avg?: CompatibilityScoreAvgAggregateInputType;
    _sum?: CompatibilityScoreSumAggregateInputType;
    _min?: CompatibilityScoreMinAggregateInputType;
    _max?: CompatibilityScoreMaxAggregateInputType;
};
export type CompatibilityScoreGroupByOutputType = {
    id: string;
    menteeId: string;
    mentorId: string;
    skillScore: number;
    interestScore: number;
    goalScore: number;
    fieldScore: number;
    availabilityScore: number;
    yearGapScore: number;
    totalScore: number;
    computedAt: Date;
    _count: CompatibilityScoreCountAggregateOutputType | null;
    _avg: CompatibilityScoreAvgAggregateOutputType | null;
    _sum: CompatibilityScoreSumAggregateOutputType | null;
    _min: CompatibilityScoreMinAggregateOutputType | null;
    _max: CompatibilityScoreMaxAggregateOutputType | null;
};
export type GetCompatibilityScoreGroupByPayload<T extends CompatibilityScoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompatibilityScoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompatibilityScoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompatibilityScoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompatibilityScoreGroupByOutputType[P]>;
}>>;
export type CompatibilityScoreWhereInput = {
    AND?: Prisma.CompatibilityScoreWhereInput | Prisma.CompatibilityScoreWhereInput[];
    OR?: Prisma.CompatibilityScoreWhereInput[];
    NOT?: Prisma.CompatibilityScoreWhereInput | Prisma.CompatibilityScoreWhereInput[];
    id?: Prisma.StringFilter<"CompatibilityScore"> | string;
    menteeId?: Prisma.StringFilter<"CompatibilityScore"> | string;
    mentorId?: Prisma.StringFilter<"CompatibilityScore"> | string;
    skillScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    interestScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    goalScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    fieldScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    availabilityScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    yearGapScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    totalScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    computedAt?: Prisma.DateTimeFilter<"CompatibilityScore"> | Date | string;
};
export type CompatibilityScoreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    mentorId?: Prisma.SortOrder;
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type CompatibilityScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    menteeId_mentorId?: Prisma.CompatibilityScoreMenteeIdMentorIdCompoundUniqueInput;
    AND?: Prisma.CompatibilityScoreWhereInput | Prisma.CompatibilityScoreWhereInput[];
    OR?: Prisma.CompatibilityScoreWhereInput[];
    NOT?: Prisma.CompatibilityScoreWhereInput | Prisma.CompatibilityScoreWhereInput[];
    menteeId?: Prisma.StringFilter<"CompatibilityScore"> | string;
    mentorId?: Prisma.StringFilter<"CompatibilityScore"> | string;
    skillScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    interestScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    goalScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    fieldScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    availabilityScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    yearGapScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    totalScore?: Prisma.FloatFilter<"CompatibilityScore"> | number;
    computedAt?: Prisma.DateTimeFilter<"CompatibilityScore"> | Date | string;
}, "id" | "menteeId_mentorId">;
export type CompatibilityScoreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    mentorId?: Prisma.SortOrder;
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
    _count?: Prisma.CompatibilityScoreCountOrderByAggregateInput;
    _avg?: Prisma.CompatibilityScoreAvgOrderByAggregateInput;
    _max?: Prisma.CompatibilityScoreMaxOrderByAggregateInput;
    _min?: Prisma.CompatibilityScoreMinOrderByAggregateInput;
    _sum?: Prisma.CompatibilityScoreSumOrderByAggregateInput;
};
export type CompatibilityScoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompatibilityScoreScalarWhereWithAggregatesInput | Prisma.CompatibilityScoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompatibilityScoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompatibilityScoreScalarWhereWithAggregatesInput | Prisma.CompatibilityScoreScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CompatibilityScore"> | string;
    menteeId?: Prisma.StringWithAggregatesFilter<"CompatibilityScore"> | string;
    mentorId?: Prisma.StringWithAggregatesFilter<"CompatibilityScore"> | string;
    skillScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    interestScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    goalScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    fieldScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    availabilityScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    yearGapScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    totalScore?: Prisma.FloatWithAggregatesFilter<"CompatibilityScore"> | number;
    computedAt?: Prisma.DateTimeWithAggregatesFilter<"CompatibilityScore"> | Date | string;
};
export type CompatibilityScoreCreateInput = {
    id?: string;
    menteeId: string;
    mentorId: string;
    skillScore: number;
    interestScore: number;
    goalScore: number;
    fieldScore: number;
    availabilityScore: number;
    yearGapScore: number;
    totalScore: number;
    computedAt?: Date | string;
};
export type CompatibilityScoreUncheckedCreateInput = {
    id?: string;
    menteeId: string;
    mentorId: string;
    skillScore: number;
    interestScore: number;
    goalScore: number;
    fieldScore: number;
    availabilityScore: number;
    yearGapScore: number;
    totalScore: number;
    computedAt?: Date | string;
};
export type CompatibilityScoreUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mentorId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    interestScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    goalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    fieldScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    availabilityScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    yearGapScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompatibilityScoreUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mentorId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    interestScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    goalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    fieldScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    availabilityScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    yearGapScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompatibilityScoreCreateManyInput = {
    id?: string;
    menteeId: string;
    mentorId: string;
    skillScore: number;
    interestScore: number;
    goalScore: number;
    fieldScore: number;
    availabilityScore: number;
    yearGapScore: number;
    totalScore: number;
    computedAt?: Date | string;
};
export type CompatibilityScoreUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mentorId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    interestScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    goalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    fieldScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    availabilityScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    yearGapScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompatibilityScoreUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menteeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mentorId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    interestScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    goalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    fieldScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    availabilityScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    yearGapScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompatibilityScoreMenteeIdMentorIdCompoundUniqueInput = {
    menteeId: string;
    mentorId: string;
};
export type CompatibilityScoreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    mentorId?: Prisma.SortOrder;
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type CompatibilityScoreAvgOrderByAggregateInput = {
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
};
export type CompatibilityScoreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    mentorId?: Prisma.SortOrder;
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type CompatibilityScoreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menteeId?: Prisma.SortOrder;
    mentorId?: Prisma.SortOrder;
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type CompatibilityScoreSumOrderByAggregateInput = {
    skillScore?: Prisma.SortOrder;
    interestScore?: Prisma.SortOrder;
    goalScore?: Prisma.SortOrder;
    fieldScore?: Prisma.SortOrder;
    availabilityScore?: Prisma.SortOrder;
    yearGapScore?: Prisma.SortOrder;
    totalScore?: Prisma.SortOrder;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CompatibilityScoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    mentorId?: boolean;
    skillScore?: boolean;
    interestScore?: boolean;
    goalScore?: boolean;
    fieldScore?: boolean;
    availabilityScore?: boolean;
    yearGapScore?: boolean;
    totalScore?: boolean;
    computedAt?: boolean;
}, ExtArgs["result"]["compatibilityScore"]>;
export type CompatibilityScoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    mentorId?: boolean;
    skillScore?: boolean;
    interestScore?: boolean;
    goalScore?: boolean;
    fieldScore?: boolean;
    availabilityScore?: boolean;
    yearGapScore?: boolean;
    totalScore?: boolean;
    computedAt?: boolean;
}, ExtArgs["result"]["compatibilityScore"]>;
export type CompatibilityScoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menteeId?: boolean;
    mentorId?: boolean;
    skillScore?: boolean;
    interestScore?: boolean;
    goalScore?: boolean;
    fieldScore?: boolean;
    availabilityScore?: boolean;
    yearGapScore?: boolean;
    totalScore?: boolean;
    computedAt?: boolean;
}, ExtArgs["result"]["compatibilityScore"]>;
export type CompatibilityScoreSelectScalar = {
    id?: boolean;
    menteeId?: boolean;
    mentorId?: boolean;
    skillScore?: boolean;
    interestScore?: boolean;
    goalScore?: boolean;
    fieldScore?: boolean;
    availabilityScore?: boolean;
    yearGapScore?: boolean;
    totalScore?: boolean;
    computedAt?: boolean;
};
export type CompatibilityScoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "menteeId" | "mentorId" | "skillScore" | "interestScore" | "goalScore" | "fieldScore" | "availabilityScore" | "yearGapScore" | "totalScore" | "computedAt", ExtArgs["result"]["compatibilityScore"]>;
export type $CompatibilityScorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CompatibilityScore";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        menteeId: string;
        mentorId: string;
        skillScore: number;
        interestScore: number;
        goalScore: number;
        fieldScore: number;
        availabilityScore: number;
        yearGapScore: number;
        totalScore: number;
        computedAt: Date;
    }, ExtArgs["result"]["compatibilityScore"]>;
    composites: {};
};
export type CompatibilityScoreGetPayload<S extends boolean | null | undefined | CompatibilityScoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload, S>;
export type CompatibilityScoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompatibilityScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompatibilityScoreCountAggregateInputType | true;
};
export interface CompatibilityScoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CompatibilityScore'];
        meta: {
            name: 'CompatibilityScore';
        };
    };
    findUnique<T extends CompatibilityScoreFindUniqueArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompatibilityScoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompatibilityScoreFindFirstArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompatibilityScoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompatibilityScoreFindManyArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompatibilityScoreCreateArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreCreateArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompatibilityScoreCreateManyArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompatibilityScoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompatibilityScoreDeleteArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreDeleteArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompatibilityScoreUpdateArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreUpdateArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompatibilityScoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompatibilityScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompatibilityScoreUpdateManyArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompatibilityScoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompatibilityScoreUpsertArgs>(args: Prisma.SelectSubset<T, CompatibilityScoreUpsertArgs<ExtArgs>>): Prisma.Prisma__CompatibilityScoreClient<runtime.Types.Result.GetResult<Prisma.$CompatibilityScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompatibilityScoreCountArgs>(args?: Prisma.Subset<T, CompatibilityScoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompatibilityScoreCountAggregateOutputType> : number>;
    aggregate<T extends CompatibilityScoreAggregateArgs>(args: Prisma.Subset<T, CompatibilityScoreAggregateArgs>): Prisma.PrismaPromise<GetCompatibilityScoreAggregateType<T>>;
    groupBy<T extends CompatibilityScoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompatibilityScoreGroupByArgs['orderBy'];
    } : {
        orderBy?: CompatibilityScoreGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompatibilityScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompatibilityScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompatibilityScoreFieldRefs;
}
export interface Prisma__CompatibilityScoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompatibilityScoreFieldRefs {
    readonly id: Prisma.FieldRef<"CompatibilityScore", 'String'>;
    readonly menteeId: Prisma.FieldRef<"CompatibilityScore", 'String'>;
    readonly mentorId: Prisma.FieldRef<"CompatibilityScore", 'String'>;
    readonly skillScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly interestScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly goalScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly fieldScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly availabilityScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly yearGapScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly totalScore: Prisma.FieldRef<"CompatibilityScore", 'Float'>;
    readonly computedAt: Prisma.FieldRef<"CompatibilityScore", 'DateTime'>;
}
export type CompatibilityScoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where: Prisma.CompatibilityScoreWhereUniqueInput;
};
export type CompatibilityScoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where: Prisma.CompatibilityScoreWhereUniqueInput;
};
export type CompatibilityScoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where?: Prisma.CompatibilityScoreWhereInput;
    orderBy?: Prisma.CompatibilityScoreOrderByWithRelationInput | Prisma.CompatibilityScoreOrderByWithRelationInput[];
    cursor?: Prisma.CompatibilityScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompatibilityScoreScalarFieldEnum | Prisma.CompatibilityScoreScalarFieldEnum[];
};
export type CompatibilityScoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where?: Prisma.CompatibilityScoreWhereInput;
    orderBy?: Prisma.CompatibilityScoreOrderByWithRelationInput | Prisma.CompatibilityScoreOrderByWithRelationInput[];
    cursor?: Prisma.CompatibilityScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompatibilityScoreScalarFieldEnum | Prisma.CompatibilityScoreScalarFieldEnum[];
};
export type CompatibilityScoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where?: Prisma.CompatibilityScoreWhereInput;
    orderBy?: Prisma.CompatibilityScoreOrderByWithRelationInput | Prisma.CompatibilityScoreOrderByWithRelationInput[];
    cursor?: Prisma.CompatibilityScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompatibilityScoreScalarFieldEnum | Prisma.CompatibilityScoreScalarFieldEnum[];
};
export type CompatibilityScoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompatibilityScoreCreateInput, Prisma.CompatibilityScoreUncheckedCreateInput>;
};
export type CompatibilityScoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompatibilityScoreCreateManyInput | Prisma.CompatibilityScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompatibilityScoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    data: Prisma.CompatibilityScoreCreateManyInput | Prisma.CompatibilityScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompatibilityScoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompatibilityScoreUpdateInput, Prisma.CompatibilityScoreUncheckedUpdateInput>;
    where: Prisma.CompatibilityScoreWhereUniqueInput;
};
export type CompatibilityScoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompatibilityScoreUpdateManyMutationInput, Prisma.CompatibilityScoreUncheckedUpdateManyInput>;
    where?: Prisma.CompatibilityScoreWhereInput;
    limit?: number;
};
export type CompatibilityScoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompatibilityScoreUpdateManyMutationInput, Prisma.CompatibilityScoreUncheckedUpdateManyInput>;
    where?: Prisma.CompatibilityScoreWhereInput;
    limit?: number;
};
export type CompatibilityScoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where: Prisma.CompatibilityScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompatibilityScoreCreateInput, Prisma.CompatibilityScoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompatibilityScoreUpdateInput, Prisma.CompatibilityScoreUncheckedUpdateInput>;
};
export type CompatibilityScoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
    where: Prisma.CompatibilityScoreWhereUniqueInput;
};
export type CompatibilityScoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompatibilityScoreWhereInput;
    limit?: number;
};
export type CompatibilityScoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompatibilityScoreSelect<ExtArgs> | null;
    omit?: Prisma.CompatibilityScoreOmit<ExtArgs> | null;
};
