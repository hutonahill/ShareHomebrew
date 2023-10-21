import json
import os

def parse_text_file(input_file):
    result = {}
    current_monster = None

    with open(input_file, 'r') as file:
        lines = file.readlines()

    for line in lines:
        if line.strip():  # Check if the line is not empty
            if line.startswith('\tNullable:'):
                result[current_monster]["nullable"] = line.split(': ')[1].strip() == 'True'
            elif line.startswith('\tType:'):
                result[current_monster]["type"] = line.split(': ')[1].strip()
            elif line.startswith('\tid:'):
                result[current_monster]["id"] = line.split('=')[1].strip().replace('"', '')
            elif line.startswith('\tValue:'):
                result[current_monster]["Value"] = line.split(': ')[1].strip().replace('"', '')
            elif not line.startswith('\t') and not line.startswith('output'):
                current_monster = line.strip()
                result[current_monster] = {}

    return result

def save_to_file(output_dict, output_file):
    with open(output_file, 'w') as file:
        json.dump(output_dict, file, indent=4)

def main():
    input_file = 'Monster page outline.txt'
    output_file = 'output.json'
    
    script_dir = os.path.dirname(os.path.realpath(__file__))
    os.chdir(script_dir)
    
    output = parse_text_file(input_file)
    save_to_file(output, output_file)

if __name__ == "__main__":
    main()