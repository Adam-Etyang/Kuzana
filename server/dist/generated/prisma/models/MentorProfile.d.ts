import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MentorProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$MentorProfilePayload>;
export type AggregateMentorProfile = {
    _count: MentorProfileCountAggregateOutputType | null;
    _avg: MentorProfileAvgAggregateOutputType | null;
    _sum: MentorProfileSumAggregateOutputType | null;
    _min: MentorProfileMinAggregateOutputType | null;
    _max: MentorProfileMaxAggregateOutputType | null;
};
export type MentorProfileAvgAggregateOutputType = {
    maxMentees: number | null;
    currentMentees: number | null;
};
export type MentorProfileSumAggregateOutputType = {
    maxMentees: number | null;
    currentMentees: number | null;
};
export type MentorProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    maxMentees: number | null;
    currentMentees: number | null;
    isAvailable: boolean | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MentorProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    maxMentees: number | null;
    currentMentees: number | null;
    isAvailable: boolean | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MentorProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    maxMentees: number;
    currentMentees: number;
    isAvailable: number;
    bio: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MentorProfileAvgAggregateInputType = {
    maxMentees?: true;
    currentMentees?: true;
};
export type MentorProfileSumAggregateInputType = {
    maxMentees?: true;
    currentMentees?: true;
};
export type MentorProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    maxMentees?: true;
    currentMentees?: true;
    isAvailable?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MentorProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    maxMentees?: true;
    currentMentees?: true;
    isAvailable?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MentorProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    maxMentees?: true;
    currentMentees?: true;
    isAvailable?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MentorProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MentorProfileWhereInput;
    orderBy?: Prisma.MentorProfileOrderByWithRelationInput | Prisma.MentorProfileOrderByWithRelationInput[];
    cursor?: Prisma.MentorProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MentorProfileCountAggregateInputType;
    _avg?: MentorProfileAvgAggregateInputType;
    _sum?: MentorProfileSumAggregateInputType;
    _min?: MentorProfileMinAggregateInputType;
    _max?: MentorProfileMaxAggregateInputType;
};
export type GetMentorProfileAggregateType<T extends MentorProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateMentorProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMentorProfile[P]> : Prisma.GetScalarType<T[P], AggregateMentorProfile[P]>;
};
export type MentorProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MentorProfileWhereInput;
    orderBy?: Prisma.MentorProfileOrderByWithAggregationInput | Prisma.MentorProfileOrderByWithAggregationInput[];
    by: Prisma.MentorProfileScalarFieldEnum[] | Prisma.MentorProfileScalarFieldEnum;
    having?: Prisma.MentorProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MentorProfileCountAggregateInputType | true;
    _avg?: MentorProfileAvgAggregateInputType;
    _sum?: MentorProfileSumAggregateInputType;
    _min?: MentorProfileMinAggregateInputType;
    _max?: MentorProfileMaxAggregateInputType;
};
export type MentorProfileGroupByOutputType = {
    id: string;
    userId: string;
    maxMentees: number;
    currentMentees: number;
    isAvailable: boolean;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MentorProfileCountAggregateOutputType | null;
    _avg: MentorProfileAvgAggregateOutputType | null;
    _sum: MentorProfileSumAggregateOutputType | null;
    _min: MentorProfileMinAggregateOutputType | null;
    _max: MentorProfileMaxAggregateOutputType | null;
};
export type GetMentorProfileGroupByPayload<T extends MentorProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MentorProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MentorProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MentorProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MentorProfileGroupByOutputType[P]>;
}>>;
export type MentorProfileWhereInput = {
    AND?: Prisma.MentorProfileWhereInput | Prisma.MentorProfileWhereInput[];
    OR?: Prisma.MentorProfileWhereInput[];
    NOT?: Prisma.MentorProfileWhereInput | Prisma.MentorProfileWhereInput[];
    id?: Prisma.StringFilter<"MentorProfile"> | string;
    userId?: Prisma.StringFilter<"MentorProfile"> | string;
    maxMentees?: Prisma.IntFilter<"MentorProfile"> | number;
    currentMentees?: Prisma.IntFilter<"MentorProfile"> | number;
    isAvailable?: Prisma.BoolFilter<"MentorProfile"> | boolean;
    bio?: Prisma.StringFilter<"MentorProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"MentorProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MentorProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MentorProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MentorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.MentorProfileWhereInput | Prisma.MentorProfileWhereInput[];
    OR?: Prisma.MentorProfileWhereInput[];
    NOT?: Prisma.MentorProfileWhereInput | Prisma.MentorProfileWhereInput[];
    maxMentees?: Prisma.IntFilter<"MentorProfile"> | number;
    currentMentees?: Prisma.IntFilter<"MentorProfile"> | number;
    isAvailable?: Prisma.BoolFilter<"MentorProfile"> | boolean;
    bio?: Prisma.StringFilter<"MentorProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"MentorProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MentorProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type MentorProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MentorProfileCountOrderByAggregateInput;
    _avg?: Prisma.MentorProfileAvgOrderByAggregateInput;
    _max?: Prisma.MentorProfileMaxOrderByAggregateInput;
    _min?: Prisma.MentorProfileMinOrderByAggregateInput;
    _sum?: Prisma.MentorProfileSumOrderByAggregateInput;
};
export type MentorProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.MentorProfileScalarWhereWithAggregatesInput | Prisma.MentorProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.MentorProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MentorProfileScalarWhereWithAggregatesInput | Prisma.MentorProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MentorProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"MentorProfile"> | string;
    maxMentees?: Prisma.IntWithAggregatesFilter<"MentorProfile"> | number;
    currentMentees?: Prisma.IntWithAggregatesFilter<"MentorProfile"> | number;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"MentorProfile"> | boolean;
    bio?: Prisma.StringWithAggregatesFilter<"MentorProfile"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MentorProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MentorProfile"> | Date | string;
};
export type MentorProfileCreateInput = {
    id?: string;
    maxMentees?: number;
    currentMentees?: number;
    isAvailable?: boolean;
    bio: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMentorProfileInput;
};
export type MentorProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    maxMentees?: number;
    currentMentees?: number;
    isAvailable?: boolean;
    bio: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MentorProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMentorProfileNestedInput;
};
export type MentorProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MentorProfileCreateManyInput = {
    id?: string;
    userId: string;
    maxMentees?: number;
    currentMentees?: number;
    isAvailable?: boolean;
    bio: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MentorProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MentorProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MentorProfileNullableScalarRelationFilter = {
    is?: Prisma.MentorProfileWhereInput | null;
    isNot?: Prisma.MentorProfileWhereInput | null;
};
export type MentorProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MentorProfileAvgOrderByAggregateInput = {
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
};
export type MentorProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MentorProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MentorProfileSumOrderByAggregateInput = {
    maxMentees?: Prisma.SortOrder;
    currentMentees?: Prisma.SortOrder;
};
export type MentorProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MentorProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MentorProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MentorProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.MentorProfileUpsertWithoutUserInput;
    disconnect?: Prisma.MentorProfileWhereInput | boolean;
    delete?: Prisma.MentorProfileWhereInput | boolean;
    connect?: Prisma.MentorProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MentorProfileUpdateToOneWithWhereWithoutUserInput, Prisma.MentorProfileUpdateWithoutUserInput>, Prisma.MentorProfileUncheckedUpdateWithoutUserInput>;
};
export type MentorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MentorProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.MentorProfileUpsertWithoutUserInput;
    disconnect?: Prisma.MentorProfileWhereInput | boolean;
    delete?: Prisma.MentorProfileWhereInput | boolean;
    connect?: Prisma.MentorProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MentorProfileUpdateToOneWithWhereWithoutUserInput, Prisma.MentorProfileUpdateWithoutUserInput>, Prisma.MentorProfileUncheckedUpdateWithoutUserInput>;
};
export type MentorProfileCreateWithoutUserInput = {
    id?: string;
    maxMentees?: number;
    currentMentees?: number;
    isAvailable?: boolean;
    bio: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MentorProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    maxMentees?: number;
    currentMentees?: number;
    isAvailable?: boolean;
    bio: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MentorProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.MentorProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
};
export type MentorProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.MentorProfileUpdateWithoutUserInput, Prisma.MentorProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MentorProfileCreateWithoutUserInput, Prisma.MentorProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.MentorProfileWhereInput;
};
export type MentorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.MentorProfileWhereInput;
    data: Prisma.XOR<Prisma.MentorProfileUpdateWithoutUserInput, Prisma.MentorProfileUncheckedUpdateWithoutUserInput>;
};
export type MentorProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MentorProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    currentMentees?: Prisma.IntFieldUpdateOperationsInput | number;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MentorProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    maxMentees?: boolean;
    currentMentees?: boolean;
    isAvailable?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mentorProfile"]>;
export type MentorProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    maxMentees?: boolean;
    currentMentees?: boolean;
    isAvailable?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mentorProfile"]>;
export type MentorProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    maxMentees?: boolean;
    currentMentees?: boolean;
    isAvailable?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mentorProfile"]>;
export type MentorProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    maxMentees?: boolean;
    currentMentees?: boolean;
    isAvailable?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MentorProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "maxMentees" | "currentMentees" | "isAvailable" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["mentorProfile"]>;
export type MentorProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MentorProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MentorProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MentorProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MentorProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        maxMentees: number;
        currentMentees: number;
        isAvailable: boolean;
        bio: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mentorProfile"]>;
    composites: {};
};
export type MentorProfileGetPayload<S extends boolean | null | undefined | MentorProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload, S>;
export type MentorProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MentorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MentorProfileCountAggregateInputType | true;
};
export interface MentorProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MentorProfile'];
        meta: {
            name: 'MentorProfile';
        };
    };
    findUnique<T extends MentorProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, MentorProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MentorProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MentorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MentorProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, MentorProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MentorProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MentorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MentorProfileFindManyArgs>(args?: Prisma.SelectSubset<T, MentorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MentorProfileCreateArgs>(args: Prisma.SelectSubset<T, MentorProfileCreateArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MentorProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, MentorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MentorProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MentorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MentorProfileDeleteArgs>(args: Prisma.SelectSubset<T, MentorProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MentorProfileUpdateArgs>(args: Prisma.SelectSubset<T, MentorProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MentorProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, MentorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MentorProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, MentorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MentorProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MentorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MentorProfileUpsertArgs>(args: Prisma.SelectSubset<T, MentorProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__MentorProfileClient<runtime.Types.Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MentorProfileCountArgs>(args?: Prisma.Subset<T, MentorProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MentorProfileCountAggregateOutputType> : number>;
    aggregate<T extends MentorProfileAggregateArgs>(args: Prisma.Subset<T, MentorProfileAggregateArgs>): Prisma.PrismaPromise<GetMentorProfileAggregateType<T>>;
    groupBy<T extends MentorProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MentorProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: MentorProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MentorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MentorProfileFieldRefs;
}
export interface Prisma__MentorProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MentorProfileFieldRefs {
    readonly id: Prisma.FieldRef<"MentorProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"MentorProfile", 'String'>;
    readonly maxMentees: Prisma.FieldRef<"MentorProfile", 'Int'>;
    readonly currentMentees: Prisma.FieldRef<"MentorProfile", 'Int'>;
    readonly isAvailable: Prisma.FieldRef<"MentorProfile", 'Boolean'>;
    readonly bio: Prisma.FieldRef<"MentorProfile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MentorProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MentorProfile", 'DateTime'>;
}
export type MentorProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where?: Prisma.MentorProfileWhereInput;
    orderBy?: Prisma.MentorProfileOrderByWithRelationInput | Prisma.MentorProfileOrderByWithRelationInput[];
    cursor?: Prisma.MentorProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MentorProfileScalarFieldEnum | Prisma.MentorProfileScalarFieldEnum[];
};
export type MentorProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where?: Prisma.MentorProfileWhereInput;
    orderBy?: Prisma.MentorProfileOrderByWithRelationInput | Prisma.MentorProfileOrderByWithRelationInput[];
    cursor?: Prisma.MentorProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MentorProfileScalarFieldEnum | Prisma.MentorProfileScalarFieldEnum[];
};
export type MentorProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where?: Prisma.MentorProfileWhereInput;
    orderBy?: Prisma.MentorProfileOrderByWithRelationInput | Prisma.MentorProfileOrderByWithRelationInput[];
    cursor?: Prisma.MentorProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MentorProfileScalarFieldEnum | Prisma.MentorProfileScalarFieldEnum[];
};
export type MentorProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MentorProfileCreateInput, Prisma.MentorProfileUncheckedCreateInput>;
};
export type MentorProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MentorProfileCreateManyInput | Prisma.MentorProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MentorProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    data: Prisma.MentorProfileCreateManyInput | Prisma.MentorProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MentorProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MentorProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MentorProfileUpdateInput, Prisma.MentorProfileUncheckedUpdateInput>;
    where: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MentorProfileUpdateManyMutationInput, Prisma.MentorProfileUncheckedUpdateManyInput>;
    where?: Prisma.MentorProfileWhereInput;
    limit?: number;
};
export type MentorProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MentorProfileUpdateManyMutationInput, Prisma.MentorProfileUncheckedUpdateManyInput>;
    where?: Prisma.MentorProfileWhereInput;
    limit?: number;
    include?: Prisma.MentorProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MentorProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where: Prisma.MentorProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.MentorProfileCreateInput, Prisma.MentorProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MentorProfileUpdateInput, Prisma.MentorProfileUncheckedUpdateInput>;
};
export type MentorProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
    where: Prisma.MentorProfileWhereUniqueInput;
};
export type MentorProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MentorProfileWhereInput;
    limit?: number;
};
export type MentorProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MentorProfileSelect<ExtArgs> | null;
    omit?: Prisma.MentorProfileOmit<ExtArgs> | null;
    include?: Prisma.MentorProfileInclude<ExtArgs> | null;
};
