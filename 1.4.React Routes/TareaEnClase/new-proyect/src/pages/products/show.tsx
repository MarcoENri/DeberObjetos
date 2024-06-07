import React from "react";
import { useShow, useOne } from "@refinedev/core"; 
import { Typography } from "antd";

const { Title, Text } = Typography;

const ProductShow: React.FC = () => {
    const { queryResult } = useShow();
    const { data: productData, isLoading: productIsLoading } = queryResult;
    const product = productData?.data;

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: product?.category || "",
    });

    return (
        <div> {}
            <Title level={5}>Name</Title>
            <Text>{product?.name}</Text>

            <Title level={5}>Description</Title>
            <Text>{product?.description}</Text>

            <Title level={5}>Price</Title>
            <Text>{product?.price}</Text>

            <Title level={5}>Category</Title>
            <Text>{categoryIsLoading ? "Loading..." : categoryData?.data?.title}</Text>
        </div>
    );
};

export default ProductShow;
