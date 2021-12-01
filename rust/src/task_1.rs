pub mod a {
    pub fn run() {
        println!("help i dont know how to read a file in rust");

        let input: Vec<u32> = std::fs::read_to_string("1.txt")
            .unwrap()
            .split("\n")
            .map(|str| str.parse::<u32>().unwrap())
            .collect();

        let mut increases = 0;

        for i in 1..input.len() {
            if input[i] > input[i - 1] {
                increases += 1;
            }
        }

        assert!(increases == 1121);
        println!("{}", increases);
    }
}

pub mod b {
    pub fn run() {
        let input: Vec<u32> = std::fs::read_to_string("1.txt")
            .unwrap()
            .split("\n")
            .map(|str| str.parse::<u32>().unwrap())
            .collect();

        let mut last_window: u32 = input[0..3].iter().sum();
        let mut increases = 0;
        for i in 1..input.len() - 2 {
            let next_window = last_window - input[i - 1] + input[i + 2];
            if next_window > last_window {
                increases += 1;
            }
            last_window = next_window;
        }

        assert!(increases == 1065);
        println!("Result: {}", increases);
    }
}
