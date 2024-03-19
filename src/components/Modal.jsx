import React, { useMemo, useState } from "react";
import { Modal } from "antd";
import presaleAbi from "../abi/presale.json";
import { contractAddr } from "../config";
import toast from "react-hot-toast";
import Web3 from "web3";
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/1241d8250ada4d7194749dab7b7986bf');
const web3 = new Web3(provider);
import {
    useAccount,
} from "wagmi";
const Modals = () => {
    const { address } = useAccount();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startTimeLoading, setStartTimeLoading] = useState(false)
    const [endTImeLoading, setEndTimeLoading] = useState(false)
    const [startDetails, setStartDEtails] = useState({
        startDate: "",
        startTime: "",
    });
    const [endDetails, setEndDEtails] = useState({
        endDate: "",
        endTime: "",
    });
    const integrateContract = () => {
        window.web3 = new Web3(window.ethereum);
        const web3 = window.web3;
        const minting_Contract = new web3.eth.Contract(
            presaleAbi,
            contractAddr
        );
        return minting_Contract;
    };
    const handleStartime = (event) => {
        const { name, value } = event.target;
        setStartDEtails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleEndTime = (event) => {
        const { name, value } = event.target;
        setEndDEtails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setStartDEtails({
            startDate: "",
            startTime: "",
        })
        setEndDEtails({
            endDate: "",
            endTime: "",
        })
    };
  
    const handleStartTime = async () => {
        try {
            let contract = integrateContract(web3)
            setStartTimeLoading(true)
            const datetimeStrings = `${startDetails.startDate}T${startDetails.startTime}`;
            const startDateTime = new Date(datetimeStrings);
            const startTimestamp = startDateTime.getTime();
            const startTimestamp1 = startTimestamp/1000
            const setStartTime = await contract.methods.setStartTime(startTimestamp1)
                .send({
                    from: address,
                    gas: 2000000
                })
            if (setStartTime) {
                toast.success("Start Time Updated Successfully")
                setStartDEtails({
                    startDate: "",
                    startTime: "",
                })
            }
        } catch (e) {
            console.log("Error setting start time:", e);
        } finally{
            setStartTimeLoading(false)
            setStartDEtails({
                startDate: "",
                startTime: "",
            })
        }
    }
    const handleEndDateTime = async()=>{
        try{
            let contract = integrateContract()
            
            setEndTimeLoading(true)
            const datetimeString = `${endDetails.endDate}T${endDetails.endTime}`;
            const endDateTime = new Date(datetimeString);
            const timestamp = endDateTime.getTime()
            const timestamp1 = timestamp/1000;
            const setEndTime = await contract.methods.setEndTime(timestamp1) .send({
                from: address
            })
        if (setEndTime) {
            toast.success("End Time Updated Successfully")
            setEndDEtails({
                endDate: "",
                endTime: "",
            })
        }
        }catch (e) {
            console.log("e", e);
        } finally{
            setEndTimeLoading(false)
            setEndDEtails({
                endDate: "",
                endTime: "",
            })
        }
    }
    return (
        <div>
            <button className="button-sec small w-button" onClick={showModal}>
                Date Time Change
            </button>
            <Modal title="" open={isModalOpen} onCancel={handleCancel}>
                <div className="top-box">
                    <label htmlFor="paymentInput">Start Date and Time</label>
                    <div className="start-box">
                        <input
                            type="date"
                            placeholder="0"
                            className="start-date-input"
                            name="startDate"
                            value={startDetails.startDate}
                            onChange={handleStartime}
                        />
                        <input
                            type="time"
                            placeholder="0"
                            className="start-date-input"
                            name="startTime"
                            value={startDetails.startTime}
                            onChange={handleStartime}
                        />
                    </div>
                    <button className="button-sec small w-button"
                        disabled={!address || !startDetails.startDate || !startDetails.startTime || startTimeLoading}
                        onClick={handleStartTime}
                    >
                    {startTimeLoading ? "Loading...": "Submit Start Time"}
                    </button>
                </div>
                <div className="top-box">
                    <label htmlFor="paymentInput">End Date and Time</label>
                    <div className="start-box">
                        <input
                            type="date"
                            placeholder="0"
                            className="start-date-input"
                            name="endDate"
                            value={endDetails.endDate}
                            onChange={handleEndTime}
                        />
                        <input
                            type="time"
                            placeholder="0"
                            className="start-date-input"
                            name="endTime"
                            value={endDetails.endTime}
                            onChange={handleEndTime}
                        />
                    </div>
                    <button className="button-sec small w-button"
                        disabled={!address || !endDetails.endDate || !endDetails.endTime || endTImeLoading}
                        onClick={handleEndDateTime}
                    > {endTImeLoading? "Loading..." : "Submit End TIme"}
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Modals;
