import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../../constant/constant";
import toast from "react-hot-toast";
import ChatBox from "../..//component/chatbox/ChatBox.jsx";

export default function Forum() {
  const [newMessage, setNewMessage] = useState();
  const [allMessage, setAllMessage] = useState([]);
  const [userid, setUserid] = useState();

  useEffect(() => {
    getAllMessage();
  }, []);

  const token2 = sessionStorage.getItem("token");

  async function sendMessage() {
    try {
      const sendMessageData = await axios.post(
        `${baseURL}/sendMessage`,
        {
          receiver_id: userid,
          message_content: newMessage,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );
      window.location.reload();
      toast.success("Sent!");
      getAllMessage();
    } catch (err) {
      console.log(err);
      toast.error("Message not sent.");
    }
  }

  async function getAllMessage() {
    try {
      const allMessageData = await axios.get(
        `${baseURL}/getMessages?page_no=0&page_size=99999`,
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );
      toast.success(allMessageData.data.message);
      setAllMessage(allMessageData.data.data.messageList.content);
    } catch (err) {
      console.log(err);
      setAllMessage([]);
      toast.error("No Message was displayed");
    }
  }
  return (
    <>
      <div>
        <div className="bg-white m-10 p-10">
          <h1>Forum</h1>
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ul>
            {allMessage &&
              allMessage.map((message, i) => (
                <li key={i}>
                  <div className="m-4 p-4 bg-yellow-100">
                    <ChatBox />
                  </div>
                </li>
              ))}
          </ul>
          <div className=" p-4 bg-blue-100 m-4 rounded-lg">
            <input
              className="w-10/12"
              type="text"
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
            />
            <button onClick={() => sendMessage()} className="px-10 bg-gray-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
