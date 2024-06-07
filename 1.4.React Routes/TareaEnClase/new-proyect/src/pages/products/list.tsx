import React from "react";
import { useTable, useMany, BaseRecord } from "@refinedev/core";
import { List, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

const ProductsList: React.FC = () => {
    const { tableQueryResult } = useTable({
        resource: "products",
    });

    const { data, isLoading } = tableQueryResult;
    const products = data?.data ?? [];

    const categoryIds = products.map((product) => product.category?.id);
    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: categoryIds,
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
    };

    return (
        <List>
            <Table dataSource={products} loading={isLoading} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column dataIndex="price" title="Price" />
                <Table.Column
                    dataIndex="category"
                    title="Category"
                    render={(category) =>
                        categoryIsLoading ? (
                            <>Loading...</>
                        ) : (
                            categoryData?.data?.find((item) => item.id === category?.id)?.title
                        )
                    }
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => formatDate(value)}
                />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id} />
                            <ShowButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

export default ProductsList;
