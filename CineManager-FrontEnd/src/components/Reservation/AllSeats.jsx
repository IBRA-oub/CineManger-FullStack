import React, { useEffect, useState } from 'react';
import '../../style/AllSeats.css'
import { getSeance } from '../../../services/sessionApi/getSessionApi';
import { Link } from 'react-router-dom';

export default function AllSeats({ id, selectedSeats, setSelectedSeats }) {
    // const [numSquares, setNumSquares] = useState(100)

    const [seance, setSeance] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {


        const fetchSeance = async () => {
            const data = await getSeance(id);
            // console.log(data);
            setSeance(data);
            setLoading(true)

            const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
            setSelectedSeats(storedSeats);
        };


        fetchSeance();

    }, [id]);

    const handleSeatClick = (place) => {
        if (!place.disponible) {

            return;
        }

        const updatedSeats = [...selectedSeats];
        const seatIndex = updatedSeats.indexOf(place.numero);

        if (seatIndex === -1) {

            updatedSeats.push(place.numero);
        } else {

            updatedSeats.splice(seatIndex, 1);
        }


        setSelectedSeats(updatedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(updatedSeats));
    };


    return (
        <>
            {loading && <div className='w-full  h-[150vh] bg-[#121212] flex justify-end'>
                <div className='w-[70%] h-full  flex'>

                    <div className='w-[80%] h-full '>
                        <div className='w-full h-20 flex justify-evenly items-center'>
                            <div className='flex text-white items-center'>
                                <div className='relative  shadow-lg mr-3'>

                                    {/* SVG du siège */}
                                    <svg
                                        fill='#86efac'

                                        height="40px" width="40px" viewBox="0 0 512 512"
                                    >
                                        <g transform="translate(1 1)">
                                            <g>
                                                <g>
                                                    <path d="M442.733,204.653h-57.398l-7.455-135.68C376.173,29.72,343.747-1,304.493-1h-98.987
                                                                        c-39.253,0-70.827,30.72-73.387,69.973L124.685,203.8H67.267c-9.387,0-17.067,7.68-17.067,17.067v17.067
                                                                        C50.2,247.32,57.88,255,67.267,255v93.867c0,14.507,11.093,25.6,25.6,25.6h8.533V383c0,5.12,3.413,8.533,8.533,8.533h25.6V485.4
                                                                        c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6v-93.867h136.533V485.4c0,14.507,11.093,25.6,25.6,25.6
                                                                        c14.507,0,25.6-11.093,25.6-25.6v-93.867h25.6c5.12,0,8.533-3.413,8.533-8.533v-8.533h8.533c14.507,0,25.6-11.093,25.6-24.747
                                                                        V255c9.387,0,17.067-7.68,17.067-16.213V221.72C459.8,212.333,452.12,204.653,442.733,204.653z M205.507,16.067h98.987
                                                                        c29.867,0,54.613,23.893,56.32,53.76l9.538,175.779c-0.099,0.531-0.152,1.097-0.152,1.715l2.07,33.644l0.472,8.695
                                                                        c-0.578-0.089-1.161-0.161-1.747-0.228c-1.496-0.29-3.276-0.297-5.062-0.297H144.067c-1.786,0-3.566,0.007-5.062,0.297
                                                                        c-0.586,0.067-1.169,0.139-1.747,0.228l2.278-41.984c0.102-0.392,0.195-0.792,0.264-1.207l1.707-34.133
                                                                        c0-0.147-0.015-0.308-0.028-0.467l7.708-142.04C150.893,39.96,175.64,16.067,205.507,16.067z M67.267,220.867h56.32
                                                                        l-0.853,17.067H75.8h-8.533V220.867z M92.867,357.4c-5.12,0-8.533-3.413-8.533-8.533V255h37.528l-0.171,3.097l-2.37,38.716
                                                                        c-0.153,0.118-0.296,0.245-0.448,0.364c-10.648,7.692-17.472,20.224-17.472,34.623v25.6H92.867z M169.667,485.4
                                                                        c0,5.12-3.413,8.533-8.533,8.533s-8.533-3.413-8.533-8.533v-93.867h17.067V485.4z M357.4,485.4c0,5.12-3.413,8.533-8.533,8.533
                                                                        c-5.12,0-8.533-3.413-8.533-8.533v-93.867H357.4V485.4z M391.533,374.467h-25.6H331.8H178.2h-34.133h-25.6v-8.533V331.8
                                                                        c0-0.571,0.021-1.14,0.058-1.704c0.002-0.035,0.005-0.069,0.007-0.104c0.383-5.449,2.487-10.538,5.776-14.762
                                                                        c1.576-1.895,3.43-3.544,5.508-4.897c0.711-0.113,1.506-0.321,2.305-0.721c2.064-1.548,4.442-2.464,6.94-2.953
                                                                        c0.269-0.05,0.539-0.096,0.81-0.138c0.131-0.021,0.263-0.04,0.395-0.058c0.345-0.048,0.692-0.091,1.042-0.126
                                                                        c0.122-0.012,0.244-0.02,0.367-0.03c0.325-0.028,0.65-0.054,0.979-0.071c0.47-0.022,0.942-0.037,1.413-0.037h221.867
                                                                        c0.472,0,0.943,0.015,1.413,0.037c0.329,0.017,0.654,0.043,0.979,0.071c0.122,0.01,0.245,0.019,0.367,0.03
                                                                        c0.35,0.035,0.697,0.078,1.042,0.126c0.132,0.018,0.264,0.038,0.395,0.058c0.272,0.042,0.542,0.089,0.81,0.138
                                                                        c2.499,0.489,4.877,1.405,6.94,2.953c0.352,0.234,0.722,0.43,1.101,0.6c7.337,4.134,11.907,11.53,12.488,19.788
                                                                        c0.002,0.03,0.005,0.06,0.006,0.09c0.038,0.566,0.058,1.136,0.058,1.709v34.133V374.467z M425.667,348.867
                                                                        c0,5.12-3.413,8.533-8.533,8.533H408.6v-25.6c0-0.829-0.028-1.651-0.073-2.468c-0.017-0.311-0.045-0.618-0.068-0.927
                                                                        c-0.037-0.487-0.077-0.973-0.129-1.455c-0.043-0.403-0.095-0.804-0.149-1.204c-0.048-0.348-0.099-0.694-0.157-1.04
                                                                        c-0.078-0.455-0.167-0.907-0.266-1.357c-0.065-0.3-0.137-0.597-0.209-0.893c-0.119-0.49-0.243-0.978-0.39-1.461
                                                                        c-0.079-0.263-0.16-0.527-0.248-0.787c-0.144-0.426-0.3-0.85-0.469-1.268c-0.141-0.344-0.29-0.686-0.451-1.025
                                                                        c-0.188-0.403-0.385-0.802-0.6-1.197c-0.139-0.255-0.276-0.511-0.425-0.764c-0.26-0.459-0.534-0.913-0.827-1.358
                                                                        c-0.184-0.287-0.369-0.572-0.561-0.854c-0.335-0.497-0.686-0.986-1.049-1.466c-0.224-0.29-0.444-0.581-0.676-0.865
                                                                        c-0.597-0.729-1.224-1.443-1.88-2.135c-1.476-1.572-3.112-2.985-4.881-4.178c-0.353-0.249-0.723-0.471-1.09-0.697
                                                                        c-1.489-0.921-3.082-1.633-4.762-2.104c-0.358-0.105-0.72-0.193-1.084-0.282c-1.547-0.385-3.129-0.579-4.754-0.579H83.067v-93.867
                                                                        h8.533h341.867h8.533V348.867z M450.933,255.933v8.533c0,5.12-3.413,8.533-8.533,8.533h-50.626l-0.853-17.067h51.48
                                                                        C447.52,247.4,450.933,250.813,450.933,255.933z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p>Empty</p>
                            </div>
                            <div className='flex text-white items-center'>
                                <div className='relative  shadow-lg mr-3'>
                                    {/* SVG du siège */}
                                    <svg
                                        fill='#6b7280'

                                        height="40px" width="40px" viewBox="0 0 512 512"
                                    >
                                        <g transform="translate(1 1)">
                                            <g>
                                                <g>
                                                    <path d="M442.733,204.653h-57.398l-7.455-135.68C376.173,29.72,343.747-1,304.493-1h-98.987
                                                                        c-39.253,0-70.827,30.72-73.387,69.973L124.685,203.8H67.267c-9.387,0-17.067,7.68-17.067,17.067v17.067
                                                                        C50.2,247.32,57.88,255,67.267,255v93.867c0,14.507,11.093,25.6,25.6,25.6h8.533V383c0,5.12,3.413,8.533,8.533,8.533h25.6V485.4
                                                                        c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6v-93.867h136.533V485.4c0,14.507,11.093,25.6,25.6,25.6
                                                                        c14.507,0,25.6-11.093,25.6-25.6v-93.867h25.6c5.12,0,8.533-3.413,8.533-8.533v-8.533h8.533c14.507,0,25.6-11.093,25.6-24.747
                                                                        V255c9.387,0,17.067-7.68,17.067-16.213V221.72C459.8,212.333,452.12,204.653,442.733,204.653z M205.507,16.067h98.987
                                                                        c29.867,0,54.613,23.893,56.32,53.76l9.538,175.779c-0.099,0.531-0.152,1.097-0.152,1.715l2.07,33.644l0.472,8.695
                                                                        c-0.578-0.089-1.161-0.161-1.747-0.228c-1.496-0.29-3.276-0.297-5.062-0.297H144.067c-1.786,0-3.566,0.007-5.062,0.297
                                                                        c-0.586,0.067-1.169,0.139-1.747,0.228l2.278-41.984c0.102-0.392,0.195-0.792,0.264-1.207l1.707-34.133
                                                                        c0-0.147-0.015-0.308-0.028-0.467l7.708-142.04C150.893,39.96,175.64,16.067,205.507,16.067z M67.267,220.867h56.32
                                                                        l-0.853,17.067H75.8h-8.533V220.867z M92.867,357.4c-5.12,0-8.533-3.413-8.533-8.533V255h37.528l-0.171,3.097l-2.37,38.716
                                                                        c-0.153,0.118-0.296,0.245-0.448,0.364c-10.648,7.692-17.472,20.224-17.472,34.623v25.6H92.867z M169.667,485.4
                                                                        c0,5.12-3.413,8.533-8.533,8.533s-8.533-3.413-8.533-8.533v-93.867h17.067V485.4z M357.4,485.4c0,5.12-3.413,8.533-8.533,8.533
                                                                        c-5.12,0-8.533-3.413-8.533-8.533v-93.867H357.4V485.4z M391.533,374.467h-25.6H331.8H178.2h-34.133h-25.6v-8.533V331.8
                                                                        c0-0.571,0.021-1.14,0.058-1.704c0.002-0.035,0.005-0.069,0.007-0.104c0.383-5.449,2.487-10.538,5.776-14.762
                                                                        c1.576-1.895,3.43-3.544,5.508-4.897c0.711-0.113,1.506-0.321,2.305-0.721c2.064-1.548,4.442-2.464,6.94-2.953
                                                                        c0.269-0.05,0.539-0.096,0.81-0.138c0.131-0.021,0.263-0.04,0.395-0.058c0.345-0.048,0.692-0.091,1.042-0.126
                                                                        c0.122-0.012,0.244-0.02,0.367-0.03c0.325-0.028,0.65-0.054,0.979-0.071c0.47-0.022,0.942-0.037,1.413-0.037h221.867
                                                                        c0.472,0,0.943,0.015,1.413,0.037c0.329,0.017,0.654,0.043,0.979,0.071c0.122,0.01,0.245,0.019,0.367,0.03
                                                                        c0.35,0.035,0.697,0.078,1.042,0.126c0.132,0.018,0.264,0.038,0.395,0.058c0.272,0.042,0.542,0.089,0.81,0.138
                                                                        c2.499,0.489,4.877,1.405,6.94,2.953c0.352,0.234,0.722,0.43,1.101,0.6c7.337,4.134,11.907,11.53,12.488,19.788
                                                                        c0.002,0.03,0.005,0.06,0.006,0.09c0.038,0.566,0.058,1.136,0.058,1.709v34.133V374.467z M425.667,348.867
                                                                        c0,5.12-3.413,8.533-8.533,8.533H408.6v-25.6c0-0.829-0.028-1.651-0.073-2.468c-0.017-0.311-0.045-0.618-0.068-0.927
                                                                        c-0.037-0.487-0.077-0.973-0.129-1.455c-0.043-0.403-0.095-0.804-0.149-1.204c-0.048-0.348-0.099-0.694-0.157-1.04
                                                                        c-0.078-0.455-0.167-0.907-0.266-1.357c-0.065-0.3-0.137-0.597-0.209-0.893c-0.119-0.49-0.243-0.978-0.39-1.461
                                                                        c-0.079-0.263-0.16-0.527-0.248-0.787c-0.144-0.426-0.3-0.85-0.469-1.268c-0.141-0.344-0.29-0.686-0.451-1.025
                                                                        c-0.188-0.403-0.385-0.802-0.6-1.197c-0.139-0.255-0.276-0.511-0.425-0.764c-0.26-0.459-0.534-0.913-0.827-1.358
                                                                        c-0.184-0.287-0.369-0.572-0.561-0.854c-0.335-0.497-0.686-0.986-1.049-1.466c-0.224-0.29-0.444-0.581-0.676-0.865
                                                                        c-0.597-0.729-1.224-1.443-1.88-2.135c-1.476-1.572-3.112-2.985-4.881-4.178c-0.353-0.249-0.723-0.471-1.09-0.697
                                                                        c-1.489-0.921-3.082-1.633-4.762-2.104c-0.358-0.105-0.72-0.193-1.084-0.282c-1.547-0.385-3.129-0.579-4.754-0.579H83.067v-93.867
                                                                        h8.533h341.867h8.533V348.867z M450.933,255.933v8.533c0,5.12-3.413,8.533-8.533,8.533h-50.626l-0.853-17.067h51.48
                                                                        C447.52,247.4,450.933,250.813,450.933,255.933z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p>Full</p>
                            </div>
                            <div className='flex text-white items-center'>
                                <div className='relative  shadow-lg mr-3'>
                                    {/* SVG du siège */}
                                    <svg
                                        fill='#dc2626'

                                        height="40px" width="40px" viewBox="0 0 512 512"
                                    >
                                        <g transform="translate(1 1)">
                                            <g>
                                                <g>
                                                    <path d="M442.733,204.653h-57.398l-7.455-135.68C376.173,29.72,343.747-1,304.493-1h-98.987
                                                                        c-39.253,0-70.827,30.72-73.387,69.973L124.685,203.8H67.267c-9.387,0-17.067,7.68-17.067,17.067v17.067
                                                                        C50.2,247.32,57.88,255,67.267,255v93.867c0,14.507,11.093,25.6,25.6,25.6h8.533V383c0,5.12,3.413,8.533,8.533,8.533h25.6V485.4
                                                                        c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6v-93.867h136.533V485.4c0,14.507,11.093,25.6,25.6,25.6
                                                                        c14.507,0,25.6-11.093,25.6-25.6v-93.867h25.6c5.12,0,8.533-3.413,8.533-8.533v-8.533h8.533c14.507,0,25.6-11.093,25.6-24.747
                                                                        V255c9.387,0,17.067-7.68,17.067-16.213V221.72C459.8,212.333,452.12,204.653,442.733,204.653z M205.507,16.067h98.987
                                                                        c29.867,0,54.613,23.893,56.32,53.76l9.538,175.779c-0.099,0.531-0.152,1.097-0.152,1.715l2.07,33.644l0.472,8.695
                                                                        c-0.578-0.089-1.161-0.161-1.747-0.228c-1.496-0.29-3.276-0.297-5.062-0.297H144.067c-1.786,0-3.566,0.007-5.062,0.297
                                                                        c-0.586,0.067-1.169,0.139-1.747,0.228l2.278-41.984c0.102-0.392,0.195-0.792,0.264-1.207l1.707-34.133
                                                                        c0-0.147-0.015-0.308-0.028-0.467l7.708-142.04C150.893,39.96,175.64,16.067,205.507,16.067z M67.267,220.867h56.32
                                                                        l-0.853,17.067H75.8h-8.533V220.867z M92.867,357.4c-5.12,0-8.533-3.413-8.533-8.533V255h37.528l-0.171,3.097l-2.37,38.716
                                                                        c-0.153,0.118-0.296,0.245-0.448,0.364c-10.648,7.692-17.472,20.224-17.472,34.623v25.6H92.867z M169.667,485.4
                                                                        c0,5.12-3.413,8.533-8.533,8.533s-8.533-3.413-8.533-8.533v-93.867h17.067V485.4z M357.4,485.4c0,5.12-3.413,8.533-8.533,8.533
                                                                        c-5.12,0-8.533-3.413-8.533-8.533v-93.867H357.4V485.4z M391.533,374.467h-25.6H331.8H178.2h-34.133h-25.6v-8.533V331.8
                                                                        c0-0.571,0.021-1.14,0.058-1.704c0.002-0.035,0.005-0.069,0.007-0.104c0.383-5.449,2.487-10.538,5.776-14.762
                                                                        c1.576-1.895,3.43-3.544,5.508-4.897c0.711-0.113,1.506-0.321,2.305-0.721c2.064-1.548,4.442-2.464,6.94-2.953
                                                                        c0.269-0.05,0.539-0.096,0.81-0.138c0.131-0.021,0.263-0.04,0.395-0.058c0.345-0.048,0.692-0.091,1.042-0.126
                                                                        c0.122-0.012,0.244-0.02,0.367-0.03c0.325-0.028,0.65-0.054,0.979-0.071c0.47-0.022,0.942-0.037,1.413-0.037h221.867
                                                                        c0.472,0,0.943,0.015,1.413,0.037c0.329,0.017,0.654,0.043,0.979,0.071c0.122,0.01,0.245,0.019,0.367,0.03
                                                                        c0.35,0.035,0.697,0.078,1.042,0.126c0.132,0.018,0.264,0.038,0.395,0.058c0.272,0.042,0.542,0.089,0.81,0.138
                                                                        c2.499,0.489,4.877,1.405,6.94,2.953c0.352,0.234,0.722,0.43,1.101,0.6c7.337,4.134,11.907,11.53,12.488,19.788
                                                                        c0.002,0.03,0.005,0.06,0.006,0.09c0.038,0.566,0.058,1.136,0.058,1.709v34.133V374.467z M425.667,348.867
                                                                        c0,5.12-3.413,8.533-8.533,8.533H408.6v-25.6c0-0.829-0.028-1.651-0.073-2.468c-0.017-0.311-0.045-0.618-0.068-0.927
                                                                        c-0.037-0.487-0.077-0.973-0.129-1.455c-0.043-0.403-0.095-0.804-0.149-1.204c-0.048-0.348-0.099-0.694-0.157-1.04
                                                                        c-0.078-0.455-0.167-0.907-0.266-1.357c-0.065-0.3-0.137-0.597-0.209-0.893c-0.119-0.49-0.243-0.978-0.39-1.461
                                                                        c-0.079-0.263-0.16-0.527-0.248-0.787c-0.144-0.426-0.3-0.85-0.469-1.268c-0.141-0.344-0.29-0.686-0.451-1.025
                                                                        c-0.188-0.403-0.385-0.802-0.6-1.197c-0.139-0.255-0.276-0.511-0.425-0.764c-0.26-0.459-0.534-0.913-0.827-1.358
                                                                        c-0.184-0.287-0.369-0.572-0.561-0.854c-0.335-0.497-0.686-0.986-1.049-1.466c-0.224-0.29-0.444-0.581-0.676-0.865
                                                                        c-0.597-0.729-1.224-1.443-1.88-2.135c-1.476-1.572-3.112-2.985-4.881-4.178c-0.353-0.249-0.723-0.471-1.09-0.697
                                                                        c-1.489-0.921-3.082-1.633-4.762-2.104c-0.358-0.105-0.72-0.193-1.084-0.282c-1.547-0.385-3.129-0.579-4.754-0.579H83.067v-93.867
                                                                        h8.533h341.867h8.533V348.867z M450.933,255.933v8.533c0,5.12-3.413,8.533-8.533,8.533h-50.626l-0.853-17.067h51.48
                                                                        C447.52,247.4,450.933,250.813,450.933,255.933z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p>Your reservation</p>
                            </div>
                        </div>

                        <div className='w-full h-56  flex justify-center items-center'>
                            <div className="w-[70%] h-32 bg-[#565656] relative trapezoid"></div>
                        </div>
                        <div className='w-full h-screen  flex justify-center items-center'>
                            <div className='w-[60%] min-h-[80%]  grid grid-cols-12'>
                                {seance.places.map((place) => (
                                    <div
                                        key={place._id}
                                        onClick={() => handleSeatClick(place)}

                                    >
                                        {/* SVG du siège */}
                                        <svg
                                            fill={`${!place.disponible ? '#6b7280' : selectedSeats.includes(place.numero) ? '#dc2626' : '#86efac'}`}

                                            height="40px" width="40px" viewBox="0 0 512 512"
                                        >
                                            <g transform="translate(1 1)">
                                                <g>
                                                    <g>
                                                        <path d="M442.733,204.653h-57.398l-7.455-135.68C376.173,29.72,343.747-1,304.493-1h-98.987
                                                                        c-39.253,0-70.827,30.72-73.387,69.973L124.685,203.8H67.267c-9.387,0-17.067,7.68-17.067,17.067v17.067
                                                                        C50.2,247.32,57.88,255,67.267,255v93.867c0,14.507,11.093,25.6,25.6,25.6h8.533V383c0,5.12,3.413,8.533,8.533,8.533h25.6V485.4
                                                                        c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6v-93.867h136.533V485.4c0,14.507,11.093,25.6,25.6,25.6
                                                                        c14.507,0,25.6-11.093,25.6-25.6v-93.867h25.6c5.12,0,8.533-3.413,8.533-8.533v-8.533h8.533c14.507,0,25.6-11.093,25.6-24.747
                                                                        V255c9.387,0,17.067-7.68,17.067-16.213V221.72C459.8,212.333,452.12,204.653,442.733,204.653z M205.507,16.067h98.987
                                                                        c29.867,0,54.613,23.893,56.32,53.76l9.538,175.779c-0.099,0.531-0.152,1.097-0.152,1.715l2.07,33.644l0.472,8.695
                                                                        c-0.578-0.089-1.161-0.161-1.747-0.228c-1.496-0.29-3.276-0.297-5.062-0.297H144.067c-1.786,0-3.566,0.007-5.062,0.297
                                                                        c-0.586,0.067-1.169,0.139-1.747,0.228l2.278-41.984c0.102-0.392,0.195-0.792,0.264-1.207l1.707-34.133
                                                                        c0-0.147-0.015-0.308-0.028-0.467l7.708-142.04C150.893,39.96,175.64,16.067,205.507,16.067z M67.267,220.867h56.32
                                                                        l-0.853,17.067H75.8h-8.533V220.867z M92.867,357.4c-5.12,0-8.533-3.413-8.533-8.533V255h37.528l-0.171,3.097l-2.37,38.716
                                                                        c-0.153,0.118-0.296,0.245-0.448,0.364c-10.648,7.692-17.472,20.224-17.472,34.623v25.6H92.867z M169.667,485.4
                                                                        c0,5.12-3.413,8.533-8.533,8.533s-8.533-3.413-8.533-8.533v-93.867h17.067V485.4z M357.4,485.4c0,5.12-3.413,8.533-8.533,8.533
                                                                        c-5.12,0-8.533-3.413-8.533-8.533v-93.867H357.4V485.4z M391.533,374.467h-25.6H331.8H178.2h-34.133h-25.6v-8.533V331.8
                                                                        c0-0.571,0.021-1.14,0.058-1.704c0.002-0.035,0.005-0.069,0.007-0.104c0.383-5.449,2.487-10.538,5.776-14.762
                                                                        c1.576-1.895,3.43-3.544,5.508-4.897c0.711-0.113,1.506-0.321,2.305-0.721c2.064-1.548,4.442-2.464,6.94-2.953
                                                                        c0.269-0.05,0.539-0.096,0.81-0.138c0.131-0.021,0.263-0.04,0.395-0.058c0.345-0.048,0.692-0.091,1.042-0.126
                                                                        c0.122-0.012,0.244-0.02,0.367-0.03c0.325-0.028,0.65-0.054,0.979-0.071c0.47-0.022,0.942-0.037,1.413-0.037h221.867
                                                                        c0.472,0,0.943,0.015,1.413,0.037c0.329,0.017,0.654,0.043,0.979,0.071c0.122,0.01,0.245,0.019,0.367,0.03
                                                                        c0.35,0.035,0.697,0.078,1.042,0.126c0.132,0.018,0.264,0.038,0.395,0.058c0.272,0.042,0.542,0.089,0.81,0.138
                                                                        c2.499,0.489,4.877,1.405,6.94,2.953c0.352,0.234,0.722,0.43,1.101,0.6c7.337,4.134,11.907,11.53,12.488,19.788
                                                                        c0.002,0.03,0.005,0.06,0.006,0.09c0.038,0.566,0.058,1.136,0.058,1.709v34.133V374.467z M425.667,348.867
                                                                        c0,5.12-3.413,8.533-8.533,8.533H408.6v-25.6c0-0.829-0.028-1.651-0.073-2.468c-0.017-0.311-0.045-0.618-0.068-0.927
                                                                        c-0.037-0.487-0.077-0.973-0.129-1.455c-0.043-0.403-0.095-0.804-0.149-1.204c-0.048-0.348-0.099-0.694-0.157-1.04
                                                                        c-0.078-0.455-0.167-0.907-0.266-1.357c-0.065-0.3-0.137-0.597-0.209-0.893c-0.119-0.49-0.243-0.978-0.39-1.461
                                                                        c-0.079-0.263-0.16-0.527-0.248-0.787c-0.144-0.426-0.3-0.85-0.469-1.268c-0.141-0.344-0.29-0.686-0.451-1.025
                                                                        c-0.188-0.403-0.385-0.802-0.6-1.197c-0.139-0.255-0.276-0.511-0.425-0.764c-0.26-0.459-0.534-0.913-0.827-1.358
                                                                        c-0.184-0.287-0.369-0.572-0.561-0.854c-0.335-0.497-0.686-0.986-1.049-1.466c-0.224-0.29-0.444-0.581-0.676-0.865
                                                                        c-0.597-0.729-1.224-1.443-1.88-2.135c-1.476-1.572-3.112-2.985-4.881-4.178c-0.353-0.249-0.723-0.471-1.09-0.697
                                                                        c-1.489-0.921-3.082-1.633-4.762-2.104c-0.358-0.105-0.72-0.193-1.084-0.282c-1.547-0.385-3.129-0.579-4.754-0.579H83.067v-93.867
                                                                        h8.533h341.867h8.533V348.867z M450.933,255.933v8.533c0,5.12-3.413,8.533-8.533,8.533h-50.626l-0.853-17.067h51.48
                                                                        C447.52,247.4,450.933,250.813,450.933,255.933z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {/* Numéro du siège */}
                                        <span className=" text-sm font-bold text-gray-400">
                                            {place.numero}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                    <div className='w-[20%]  h-full  flex justify-center '>

                        <div className='w-[70%] h-[50%]  flex flex-col text-white space-y-8 p-4 pt-6'>
                            <Link to={`/film-stream/${seance.film._id}`} className="text-white text-sm text-center font-semibold w-full bg-red-600  rounded px-4 py-2 transition duration-300 transform hover:bg-white hover:text-red-500 cursor-pointer animate-pulse">
                                View Stream
                            </Link>
                            <div className="flex flex-col items-center pt-10">
                                <span className="text-lg font-bold text-gray-400">Date & Time:</span>
                                <span className="text-xl mt-2 text-center border border-white">{seance.date_heure}</span>
                            </div>


                            <div className="flex flex-col items-center pt-10">
                                <span className="text-lg text-gray-400 font-bold">Salle Type:</span>
                                <span className="text-xl mt-2">{seance.salle.type}</span>
                            </div>
                        </div>



                    </div>
                </div>

            </div>}

        </>
    )
}
