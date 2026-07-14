LATENCY NUMBERS REFERENCE GUIDE

<img width="1543" height="787" alt="image" src="https://github.com/user-attachments/assets/6bfe0d9a-edcf-4475-a9b0-557bf095c06b" />


DEFINITION OF TIME UNITS

One Nanosecond 
This represents 10 to the power of negative 9 units. It is equivalent to one billionth of a second.

One Microsecond 
This represents 10 to the power of negative 6 units. It is equivalent to one millionth of a second.

One Millisecond 
This represents 10 to the power of negative 3 units. It is equivalent to one thousandth of a second.


NANOSECOND RANGE 1ns to 1000ns

Sub Nanosecond Range
    CPU register access
    CPU clock cycle

1 to 10 Nanoseconds
    L1 cache access
    L2 cache access
    Specific expensive CPU access operations

10 to 100 Nanoseconds
    L3 cache access at the fast end

100 to 1000 Nanoseconds
    Execution of system calls


MICROSECOND RANGE 1us to 1000us

1 to 10 Microseconds
    Context switching between Linux threads
    Data transfer from one main memory location to another

10 to 100 Microseconds
    Processing a typical HTTP request by a network proxy usually 50 microseconds
    Sequential read operations
    General read latency which is approximately 100 microseconds

100 to 1000 Microseconds or 1 Millisecond
    SSD write latency which is notably slower
    Typical Memcache or Redis GET operations


MILLISECOND RANGE 1ms to 1000ms

1 to 10 Milliseconds
    Interzone network round trip within cloud storage systems
    Seek time for a physical hard disk

10 to 100 Milliseconds
    Reading 1GB of data sequentially from main memory over far distances

100 to 1000 Milliseconds
    Slow hashing functions such as bcrypt password hashing
    TLS handshake completion
    Large distance transfers for main memory data


ONE SECOND RANGE

1 Second
    Transferring 1GB of data over a network within the same cloud regions
