import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

const ProductCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                    <Input type="number" />
                </Form.Item>
                <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};

export default ProductCreate;
