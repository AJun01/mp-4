'use server';

import { NextResponse } from 'next/server';
 

export async function POST(request: Request) {
    
    try{
        //get input zip and country code from client
        const {zip, country } = await request.json();
        const apiKey=process.env.OPENWEATHER_API_KEY;
        //get the geo data first because we gonna use the lat and lon
        if(!apiKey)return NextResponse.json({error: ' no key found'}, {status: 500});
        const geoUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`;
        const geoRes = await fetch(geoUrl);
        console.log(geoRes);
        if(!geoRes.ok) return NextResponse.json({error: 'no found geo no found oops'}, {status:geoRes.status});
        const geoData = await geoRes.json();
        console.log(geoData);
        const { lat, lon } = geoData;
        console.log(lat, lon);
        //second request with lat and lon
        const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall/overview?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const weatherRes = await fetch(weatherUrl);
        console.log(weatherRes);
        if(!weatherRes.ok) return NextResponse.json({error: weatherRes.statusText+ 'no found weather no found oops'}, {status:weatherRes.status});
        const weatherData = await weatherRes.json();

        //res
        return NextResponse.json(weatherData, {status:200})
    } catch(error){
        return NextResponse.json({error}, {status:500});
    }
  }