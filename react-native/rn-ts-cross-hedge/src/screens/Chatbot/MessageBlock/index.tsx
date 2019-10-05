import React from "react";
import ChatMessage from "../Message";
import UserOptions from "../UserOptions";

interface OwnProps {
    botMsg: string;
    options?: Array<{
        name: string;
        value: number;
        content: string | React.ReactNode;
    }>;
    onSubmit?: (value: number) => void;
}

class ChatMessageBlock extends React.PureComponent<OwnProps> {
    render() {
        return (
            <React.Fragment>
                <ChatMessage autor="bot" content={this.props.botMsg} />
                {this.props.options && this.props.onSubmit ? (
                    <ChatMessage
                        autor="user"
                        content={
                            <UserOptions
                                onSubmit={this.props.onSubmit}
                                options={this.props.options}
                            />
                        }
                    />
                ) : null}
            </React.Fragment>
        );
    }
}

export default ChatMessageBlock;
