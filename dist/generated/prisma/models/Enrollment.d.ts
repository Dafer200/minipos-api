import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnrollmentModel = runtime.Types.Result.DefaultSelection<Prisma.$EnrollmentPayload>;
export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null;
    _avg: EnrollmentAvgAggregateOutputType | null;
    _sum: EnrollmentSumAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
};
export type EnrollmentAvgAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    courseId: number | null;
};
export type EnrollmentSumAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    courseId: number | null;
};
export type EnrollmentMinAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    courseId: number | null;
    status: $Enums.EnrollmentStatus | null;
    enrolledAt: Date | null;
};
export type EnrollmentMaxAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    courseId: number | null;
    status: $Enums.EnrollmentStatus | null;
    enrolledAt: Date | null;
};
export type EnrollmentCountAggregateOutputType = {
    id: number;
    studentId: number;
    courseId: number;
    status: number;
    enrolledAt: number;
    _all: number;
};
export type EnrollmentAvgAggregateInputType = {
    id?: true;
    studentId?: true;
    courseId?: true;
};
export type EnrollmentSumAggregateInputType = {
    id?: true;
    studentId?: true;
    courseId?: true;
};
export type EnrollmentMinAggregateInputType = {
    id?: true;
    studentId?: true;
    courseId?: true;
    status?: true;
    enrolledAt?: true;
};
export type EnrollmentMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    courseId?: true;
    status?: true;
    enrolledAt?: true;
};
export type EnrollmentCountAggregateInputType = {
    id?: true;
    studentId?: true;
    courseId?: true;
    status?: true;
    enrolledAt?: true;
    _all?: true;
};
export type EnrollmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnrollmentCountAggregateInputType;
    _avg?: EnrollmentAvgAggregateInputType;
    _sum?: EnrollmentSumAggregateInputType;
    _min?: EnrollmentMinAggregateInputType;
    _max?: EnrollmentMaxAggregateInputType;
};
export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnrollment[P]> : Prisma.GetScalarType<T[P], AggregateEnrollment[P]>;
};
export type EnrollmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithAggregationInput | Prisma.EnrollmentOrderByWithAggregationInput[];
    by: Prisma.EnrollmentScalarFieldEnum[] | Prisma.EnrollmentScalarFieldEnum;
    having?: Prisma.EnrollmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnrollmentCountAggregateInputType | true;
    _avg?: EnrollmentAvgAggregateInputType;
    _sum?: EnrollmentSumAggregateInputType;
    _min?: EnrollmentMinAggregateInputType;
    _max?: EnrollmentMaxAggregateInputType;
};
export type EnrollmentGroupByOutputType = {
    id: number;
    studentId: number;
    courseId: number;
    status: $Enums.EnrollmentStatus;
    enrolledAt: Date;
    _count: EnrollmentCountAggregateOutputType | null;
    _avg: EnrollmentAvgAggregateOutputType | null;
    _sum: EnrollmentSumAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
};
export type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnrollmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnrollmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnrollmentGroupByOutputType[P]>;
}>>;
export type EnrollmentWhereInput = {
    AND?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    OR?: Prisma.EnrollmentWhereInput[];
    NOT?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    id?: Prisma.IntFilter<"Enrollment"> | number;
    studentId?: Prisma.IntFilter<"Enrollment"> | number;
    courseId?: Prisma.IntFilter<"Enrollment"> | number;
    status?: Prisma.EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
};
export type EnrollmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    enrolledAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    studentId_courseId?: Prisma.EnrollmentStudentIdCourseIdCompoundUniqueInput;
    AND?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    OR?: Prisma.EnrollmentWhereInput[];
    NOT?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    studentId?: Prisma.IntFilter<"Enrollment"> | number;
    courseId?: Prisma.IntFilter<"Enrollment"> | number;
    status?: Prisma.EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
}, "id" | "studentId_courseId">;
export type EnrollmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    enrolledAt?: Prisma.SortOrder;
    _count?: Prisma.EnrollmentCountOrderByAggregateInput;
    _avg?: Prisma.EnrollmentAvgOrderByAggregateInput;
    _max?: Prisma.EnrollmentMaxOrderByAggregateInput;
    _min?: Prisma.EnrollmentMinOrderByAggregateInput;
    _sum?: Prisma.EnrollmentSumOrderByAggregateInput;
};
export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnrollmentScalarWhereWithAggregatesInput | Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnrollmentScalarWhereWithAggregatesInput | Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Enrollment"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"Enrollment"> | number;
    courseId?: Prisma.IntWithAggregatesFilter<"Enrollment"> | number;
    status?: Prisma.EnumEnrollmentStatusWithAggregatesFilter<"Enrollment"> | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeWithAggregatesFilter<"Enrollment"> | Date | string;
};
export type EnrollmentCreateInput = {
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEnrollmentsInput;
    course: Prisma.CourseCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateInput = {
    id?: number;
    studentId: number;
    courseId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentUpdateInput = {
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEnrollmentsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentCreateManyInput = {
    id?: number;
    studentId: number;
    courseId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentUpdateManyMutationInput = {
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentListRelationFilter = {
    every?: Prisma.EnrollmentWhereInput;
    some?: Prisma.EnrollmentWhereInput;
    none?: Prisma.EnrollmentWhereInput;
};
export type EnrollmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnrollmentStudentIdCourseIdCompoundUniqueInput = {
    studentId: number;
    courseId: number;
};
export type EnrollmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    enrolledAt?: Prisma.SortOrder;
};
export type EnrollmentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type EnrollmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    enrolledAt?: Prisma.SortOrder;
};
export type EnrollmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    enrolledAt?: Prisma.SortOrder;
};
export type EnrollmentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput | Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput | Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput> | Prisma.EnrollmentCreateWithoutCourseInput[] | Prisma.EnrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutCourseInput | Prisma.EnrollmentCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EnrollmentCreateManyCourseInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput> | Prisma.EnrollmentCreateWithoutCourseInput[] | Prisma.EnrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutCourseInput | Prisma.EnrollmentCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EnrollmentCreateManyCourseInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput> | Prisma.EnrollmentCreateWithoutCourseInput[] | Prisma.EnrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutCourseInput | Prisma.EnrollmentCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutCourseInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EnrollmentCreateManyCourseInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutCourseInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutCourseInput | Prisma.EnrollmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput> | Prisma.EnrollmentCreateWithoutCourseInput[] | Prisma.EnrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutCourseInput | Prisma.EnrollmentCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutCourseInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EnrollmentCreateManyCourseInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutCourseInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutCourseInput | Prisma.EnrollmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus;
};
export type EnrollmentCreateWithoutStudentInput = {
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number;
    courseId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput>;
};
export type EnrollmentCreateManyStudentInputEnvelope = {
    data: Prisma.EnrollmentCreateManyStudentInput | Prisma.EnrollmentCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnrollmentUpdateWithoutStudentInput, Prisma.EnrollmentUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput>;
};
export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateWithoutStudentInput, Prisma.EnrollmentUncheckedUpdateWithoutStudentInput>;
};
export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.EnrollmentScalarWhereInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyWithoutStudentInput>;
};
export type EnrollmentScalarWhereInput = {
    AND?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
    OR?: Prisma.EnrollmentScalarWhereInput[];
    NOT?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
    id?: Prisma.IntFilter<"Enrollment"> | number;
    studentId?: Prisma.IntFilter<"Enrollment"> | number;
    courseId?: Prisma.IntFilter<"Enrollment"> | number;
    status?: Prisma.EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
};
export type EnrollmentCreateWithoutCourseInput = {
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: number;
    studentId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput>;
};
export type EnrollmentCreateManyCourseInputEnvelope = {
    data: Prisma.EnrollmentCreateManyCourseInput | Prisma.EnrollmentCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnrollmentUpdateWithoutCourseInput, Prisma.EnrollmentUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutCourseInput, Prisma.EnrollmentUncheckedCreateWithoutCourseInput>;
};
export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateWithoutCourseInput, Prisma.EnrollmentUncheckedUpdateWithoutCourseInput>;
};
export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.EnrollmentScalarWhereInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyWithoutCourseInput>;
};
export type EnrollmentCreateManyStudentInput = {
    id?: number;
    courseId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentUpdateWithoutStudentInput = {
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentCreateManyCourseInput = {
    id?: number;
    studentId: number;
    status?: $Enums.EnrollmentStatus;
    enrolledAt?: Date | string;
};
export type EnrollmentUpdateWithoutCourseInput = {
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus;
    enrolledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    courseId?: boolean;
    status?: boolean;
    enrolledAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    courseId?: boolean;
    status?: boolean;
    enrolledAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    courseId?: boolean;
    status?: boolean;
    enrolledAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    courseId?: boolean;
    status?: boolean;
    enrolledAt?: boolean;
};
export type EnrollmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "courseId" | "status" | "enrolledAt", ExtArgs["result"]["enrollment"]>;
export type EnrollmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $EnrollmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Enrollment";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        course: Prisma.$CoursePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        studentId: number;
        courseId: number;
        status: $Enums.EnrollmentStatus;
        enrolledAt: Date;
    }, ExtArgs["result"]["enrollment"]>;
    composites: {};
};
export type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload, S>;
export type EnrollmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnrollmentCountAggregateInputType | true;
};
export interface EnrollmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'];
        meta: {
            name: 'Enrollment';
        };
    };
    findUnique<T extends EnrollmentFindUniqueArgs>(args: Prisma.SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnrollmentFindFirstArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnrollmentFindManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnrollmentCreateArgs>(args: Prisma.SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnrollmentCreateManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnrollmentDeleteArgs>(args: Prisma.SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnrollmentUpdateArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnrollmentUpdateManyArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnrollmentUpsertArgs>(args: Prisma.SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnrollmentCountArgs>(args?: Prisma.Subset<T, EnrollmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnrollmentCountAggregateOutputType> : number>;
    aggregate<T extends EnrollmentAggregateArgs>(args: Prisma.Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>;
    groupBy<T extends EnrollmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnrollmentGroupByArgs['orderBy'];
    } : {
        orderBy?: EnrollmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnrollmentFieldRefs;
}
export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnrollmentFieldRefs {
    readonly id: Prisma.FieldRef<"Enrollment", 'Int'>;
    readonly studentId: Prisma.FieldRef<"Enrollment", 'Int'>;
    readonly courseId: Prisma.FieldRef<"Enrollment", 'Int'>;
    readonly status: Prisma.FieldRef<"Enrollment", 'EnrollmentStatus'>;
    readonly enrolledAt: Prisma.FieldRef<"Enrollment", 'DateTime'>;
}
export type EnrollmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type EnrollmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type EnrollmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentCreateInput, Prisma.EnrollmentUncheckedCreateInput>;
};
export type EnrollmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnrollmentCreateManyInput | Prisma.EnrollmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    data: Prisma.EnrollmentCreateManyInput | Prisma.EnrollmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnrollmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentUpdateInput, Prisma.EnrollmentUncheckedUpdateInput>;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyInput>;
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
};
export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyInput>;
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
    include?: Prisma.EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnrollmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateInput, Prisma.EnrollmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnrollmentUpdateInput, Prisma.EnrollmentUncheckedUpdateInput>;
};
export type EnrollmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
};
export type EnrollmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
};
