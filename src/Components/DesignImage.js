import React from 'react';
import { useState } from 'react';
import { LikeTwoTone, DislikeTwoTone, CommentOutlined, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Space, Image, Button, Input, Card, List, Typography, Row, message, Tooltip, Popconfirm } from 'antd';

export const DesignImage = (props) => {

    const arr = [
        { id: 1, src: "/image1.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 2, src: "/image2.jpeg", comments: [{ userId: 133, body: "comment1" }, { userId: 134, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 3, src: "/image3.jpeg", comments: [{ userId: 143, body: "comment1" }, { userId: 144, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 4, src: "/image4.jpeg", comments: [{ userId: 153, body: "comment1" }, { userId: 154, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 5, src: "/image5.jpeg", comments: [{ userId: 163, body: "comment1" }, { userId: 164, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 6, src: "/image6.jpeg", comments: [{ userId: 173, body: "comment1" }, { userId: 174, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 7, src: "/image7.jpeg", comments: [{ userId: 183, body: "comment1" }, { userId: 184, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 8, src: "/image8.jpeg", comments: [{ userId: 193, body: "comment1" }, { userId: 194, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 9, src: "/image9.jpeg", comments: [{ userId: 213, body: "comment1" }, { userId: 214, body: "comment 2" }], like: 0, disLike: 0 },
        { id: 10, src: "/image10.jpg", comments: [{ userId: 223, body: "comment1" }, { userId: 224, body: "comment 2" }], like: 0, disLike: 0 }
    ];

    const [images, setImages] = useState(arr);
    const [comment, setComment] = useState("");

    // Load data from localStorage if available or use a default initial value
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('images'));
    //     if (items) {
    //       setImages(items)
    //     }
    // }, [])

    // // Save data to localStorage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem('images', JSON.stringify(images));
    // }, [images]);

    // like button
    const handleUp = (id) => {
        console.log(id);
        setImages((images) => 
           images.map((ele) => 
             ele.id === id ? { ...ele, like: ele.like + 1 } : ele
           )
        )
    };

    // dislike button
    const handleDown = (id) => {
        setImages((images) => 
           images.map((item) => 
              item.id === id ? { ...item, disLike: item.disLike - 1 } : item
           )
        )
    }

    // comment edit
    function handleEdit(id, commentId, editedText) {
        // const result = images.map(function (ele) {
        //     if (ele.id === id) {
        //         const obj = { ...ele };
        //         obj.comments = ele.comments.map((elements, index) => (index.userId === commentId));
        //         return { obj, body: editedText };

        //     } else {
        //         return { ...ele };
        //     }
        // });
        // setImages(result);

        setImages((prevData) =>
        prevData.map((item) =>
          item.id === id
            ? {
                ...item,
                comments: item.comments.map((comment) =>
                  comment.userId === commentId
                    ? { ...comment, body: editedText }
                    : comment
                ),
              }
            : item
        )
      );
    }

    // comment delete
    const handleDelete = (id, commentId) => {
        const result = images.map((ele) => {
            if (ele.id === id) {
                const obj = { ...ele };
                obj.comments = ele.comments.filter((elements, index) => (index !== commentId));
                return obj;
            } else {
                return { ...ele };
            }
        });
        setImages(result);
    };

    // comment input
    const handleInputChange = (e, index) => {
        const newValues = [...comment]
        newValues[index] = e.target.value
        setComment(newValues)
    }

    // comment button
    const commentHandle = (id) => {
        const newArr = images.map((ele) => {
            if (ele.id === id) {
                const arr = [...ele.comments, { userId: '122', body: comment }];
                      return { ...ele, comments: arr }
            } else {
                return { ...ele };
            }
        });
        setImages(newArr);
        const newValue = [...comment]
        newValue[id - 1] = ""
        setComment(newValue)
    };

    return (
        <div className="App">

            <Typography.Title style={{ textAlign: "center", fontFamily: "monospace" }}>
                SuperBolter - Living Room Designs
            </Typography.Title>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
                {images.map((image, index) => {
                    return (
                        <div key={image.id}>
                            <Card size="small"  
                                hoverable
                                style={{
                                    width: 460,
                                    display: 'flex'
                                }}
                            >
                            <Image src={image.src} alt={`Image ${image.id}`} />

                            <Input
                                    style={{ width: 253 }}
                                    placeholder="Add a comment..."
                                    value={comment[index]}
                                    onChange={(e) => handleInputChange(e,  index )}
                                    addonAfter={<Button
                                        style={{ width: 110 }}
                                        icon={<CommentOutlined />}
                                        onClick={() => commentHandle(image.id, comment)}
                                       // disabled={!comment.trim()}
                                        >
                                        Comment
                                    </Button>} 
                            />

                            <Button icon={<LikeTwoTone />}
                                    style={{ width: 80 }}
                                    onClick={() => handleUp(image.id)}> Like {image.like}
                            </Button>

                            <Button icon={<DislikeTwoTone />}
                                    style={{ width: 100 }}
                                    onClick={() => handleDown(image.id)}>Dislike {image.disLike}
                            </Button>
                            
                            <List itemLayout="horizontal" style={{
                                    textAlign: 'start',
                                    marginTop: 12,
                            }}>
                                {image.comments.map((comment, index) => {
                                        return (<List.Item key={comment.userId}>
                                            <Space size="start">
                                                {comment.body}
                                            </Space>
                                            <Space>
                                                <Tooltip title="Edit comment">
                                                    <Button icon={<EditTwoTone />} onClick={() => {
                                                        const editedText = prompt('Edit comment:', comment.body);
                                                        if (editedText !== null) {
                                                            handleEdit(image.id, comment.userId, editedText);
                                                        }
                                                    }}></Button>
                                                </Tooltip>
                                                <Tooltip title="Delete comment">
                                                    <Popconfirm
                                                        title="Are you sure you want to delete this comment?"
                                                        onConfirm={() => {
                                                            handleDelete(image.id, index);
                                                            message.success('Comment deleted');
                                                        }}
                                                        onCancel={() => message.info('Comment not deleted')}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Button icon={<DeleteTwoTone />}></Button>
                                                    </Popconfirm>
                                                </Tooltip>
                                            </Space>
                                        </List.Item>);
                                    })}
                                </List>
                            </Card>
                        </div>
                    );
                })}
            </Row>
        </div>
    );
};

export default DesignImage
