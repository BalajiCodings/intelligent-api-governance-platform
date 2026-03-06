# A SaaS-Based Cloud-Native Platform for Adaptive API Traffic Governance

A cloud-native backend platform designed to monitor, control, and govern API traffic across multiple consumers using adaptive usage policies. The system simulates real-world API Gateway behavior by enforcing request tracking, consumer identification, and usage-based governance.

The platform provides a scalable architecture for managing API consumption using Redis-powered request tracking and middleware-based governance logic.


# Overview
Modern applications expose APIs that are consumed by multiple clients such as mobile apps, partner services, or external developers. Without governance, uncontrolled API traffic can lead to performance degradation, security risks, and unfair usage.

This project introduces a governance layer that dynamically monitors API requests and applies usage tracking policies to ensure fair and scalable API consumption.

# Key Features

API Gateway simulation using middleware architecture

Consumer-based API access using API keys

Real-time API usage tracking using Redis

Time-window based request counting

Modular routing and middleware chaining

Cloud-native deployment on AWS

Process management using PM2 for production reliability

# Tech Stack

Backend

Node.js

Express.js

Cloud Infrastructure

AWS EC2

AWS ElastiCache (Redis)

AWS API Gateway

AWS VPC

Database / Cache

Redis

Deployment

PM2

Ubuntu EC2

# Project Structure

project-root
│
├── config
│   └── redis.config.js
│
├── middlewares
│   ├── apiGateway.middleware.js
│   └── usageTracker.middleware.js
│
├── services
│   └── usageTracker.service.js
│
├── routes
│   └── v1
│       ├── index.js
│       └── test.routes.js
│
├── app.js
├── server.js
├── package.json
└── README.md

# Core Concepts
API Gateway Middleware

Simulates API Gateway behavior by identifying the API consumer using an API key and attaching request metadata.

Responsibilities:

Extract API key from request headers

Identify the API consumer

Attach request metadata

Pass request to governance layer

Usage Tracking Middleware

Tracks every API request using Redis and stores usage counters for each consumer.

Responsibilities:

Capture request endpoint

Identify consumer

Increment Redis usage counter

Attach usage information to request context

Redis Usage Tracking

Each request increments a Redis counter based on:

consumer ID
API endpoint
time window

Example Redis Key:

usage:free-user-1:/api/v1/test:123456

This enables tracking:

Requests per consumer

Requests per endpoint

Requests per time window

Usage Tracking Logic

The system uses a fixed time-window tracking mechanism.

# Steps:

Identify consumer using API key

Capture request endpoint

Generate Redis key using consumer, endpoint, and time window

Increment usage counter using Redis atomic operations

Set expiration for the key to automatically reset usage window

This approach ensures high-performance request tracking without database overhead.

# API Endpoints

Health Check

GET /health

Response

{
  "status": "UP",
  "message": "API Governance Service is running"
}

Test Endpoint

GET /api/v1/test

Headers

x-api-key: FREE_KEY_123

# Local Setup

Clone the repository

git clone https://github.com/your-username/your-repository.git
cd your-repository

Install dependencies

npm install

Start Redis locally

docker run -p 6379:6379 redis

Run the server

npm start
Environment Variables

Create a .env file

PORT=3000
REDIS_URL=redis://localhost:6379

# For production (AWS ElastiCache)

REDIS_URL=redis://your-elasticache-endpoint:6379
Deployment on AWS

The platform is deployed using the following infrastructure.

EC2 Instance

Runs Node.js backend

Managed using PM2

ElastiCache (Redis)

Handles API usage tracking

Stores request counters

API Gateway

Acts as entry point for client requests

VPC

Ensures secure communication between EC2 and Redis

# EC2 Deployment

Connect to EC2

ssh -i your-key.pem ubuntu@your-ec2-ip

Clone the project

git clone https://github.com/your-username/repository.git

Install dependencies

npm install

Install PM2

sudo npm install -g pm2

Start application

pm2 start server.js --name api-governance

Enable auto start

pm2 startup
pm2 save

# Future Enhancements

Dynamic rate limiting

Tier-based request limits

Consumer analytics dashboard

Alerting and monitoring system

Distributed governance across multiple services

Integration with managed API gateways

# Learning Outcomes

This project demonstrates:

Middleware-based backend architecture

Scalable API governance design

Redis-based request tracking

Cloud-native deployment strategies

Infrastructure integration with AWS services
