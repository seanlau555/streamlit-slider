import os
import streamlit.components.v1 as components
import streamlit as st

_RELEASE = True

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _discrete_slider = components.declare_component("discrete_slider", path=build_dir)
else:
    _discrete_slider = components.declare_component(
        "discrete_slider", url="http://localhost:3001"
    )

# click onClick "Click Me!" will rerun the script
st.title("Component tutorial!")


def discrete_slider(options, key=None):
    return _discrete_slider(options=options, default=0, key=key)


# selected_value = discrete_slider(["twas", "brilling", "and", "the", "slithey"])
# st.write("Return value: ", selected_value)
