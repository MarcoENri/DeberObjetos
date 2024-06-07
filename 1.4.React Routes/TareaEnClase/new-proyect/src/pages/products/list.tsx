import React from "react";
import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    NumberField,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const ProductList: React.FC = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
        resource: "products",
    });

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids:
            tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title={"ID"} />
                <Table.Column dataIndex="name" title={"Name"} />
                <Table.Column dataIndex="description" title={"Description"} />
                <Table.Column dataIndex="price" title={"Price"} render={(value) => <NumberField value={value} />} />
                <Table.Column
                    dataIndex={"category"}
                    title={"Category"}
                    render={(value) =>
                        categoryIsLoading ? (
                            <>Loading...</>
                        ) : (
                            categoryData?.data?.find((item) => item.id === value?.id)?.title
                        )
                    }
                />
                <Table.Column
                    dataIndex={["createdAt"]}
                    title={"Created at"}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    title={"Actions"}
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
