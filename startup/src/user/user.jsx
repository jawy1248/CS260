import React from "react";

export function User() {
  return (
    <main>
      <div className="'d-flex flex-column m-3" id="DisplayLogin">
        <div className="text-center m-3" id="reloadName"></div>
        <div className="text-center m-3 row" id="reloadData"></div>
      </div>
      <hr />
      <div className="m-2">
        <div className="h2 m-2">Chat</div>
        <div className="m-2" id="chat">
          <button onClick={chat} className="text-bg-danger rounded-3">
            Chat
          </button>
        </div>
        <div className="m-2" id="chatBack"></div>
        <div className="m-2" id="reply"></div>
      </div>
    </main>
  );
}
